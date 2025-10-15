import axios from "axios";
import Chat from "../models/Chat.js";
import User from "../models/User.js";
import { sendGeminiChat } from "../configs/gemini.js";
import imagekit from "../configs/imageKit.js";

/**
 * Controller: Handle text-based AI chat message.
 * Deducts 1 credit. Stores conversation in user chat history.
 */
export const textMessageController = async (req, res) => {
  try {
    const userId = req.user._id;
    // Ensure user has enough credits
    if (req.user.credits < 1) {
      return res.json({
        success: false,
        message: "You don't have enough credits to use this feature",
      });
    }
    const { chatId, prompt } = req.body;
    const chat = await Chat.findOne({ userId, _id: chatId });
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });
    // Call Gemini API for assistant response
    const geminiData = await sendGeminiChat(prompt);
    const reply = {
      role: "assistant",
      content: geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "(No response)",
      timestamp: Date.now(),
      isImage: false,
    };
    res.json({ success: true, reply });
    chat.messages.push(reply);
    await chat.save();
    await User.updateOne({ _id: userId }, { $inc: { credits: -1 } });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

/**
 * Controller: Handle AI image prompt.
 * Deducts 2 credits. Generates image using ImageKit, saves to chat.
 */
export const imageMessageController = async (req, res) => {
  try {
    const userId = req.user._id;
    if (req.user.credits < 2) {
      return res.json({
        success: false,
        message: "You don't have enough credits to use this feature",
      });
    }
    const { prompt, chatId, isPublished } = req.body;
    const chat = await Chat.findOne({ userId, _id: chatId });
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });
    // ImageKit prompt must be URL encoded
    const encodedPrompt = encodeURIComponent(prompt);
    const generatedImageUrl = `${process.env.IMAGEKIT_URL_ENDPOINT}/ik-genimg-prompt-${encodedPrompt}/quickgpt/${Date.now()}.png?tr=w-800,h-800`;
    // Request image generation
    const aiImageResponse = await axios.get(generatedImageUrl, {
      responseType: "arraybuffer",
    });
    // Convert to Base64 for upload
    const base64Image = `data:image/png;base64,${Buffer.from(
      aiImageResponse.data,
      "binary"
    ).toString("base64")}`;
    // Upload result to ImageKit
    const uploadResponse = await imagekit.upload({
      file: base64Image,
      fileName: `quickgpt/${Date.now()}.png`,
      folder: "quickgpt",
    });
    const reply = {
      role: "assistant",
      content: uploadResponse.url,
      timestamp: Date.now(),
      isImage: true,
      isPublished,
    };
    res.json({ success: true, reply });
    chat.messages.push(reply);
    await chat.save();
    await User.updateOne({ _id: userId }, { $inc: { credits: -2 } });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
