<div align="center">

# QUICKGPT 🤖  
AI-Powered Content Generation Platform  

![Last Commit](https://img.shields.io/github/last-commit/harshkushwaha7x/QuickGPT?style=flat-square)  
![Languages](https://img.shields.io/github/languages/top/harshkushwaha7x/QuickGPT?style=flat-square&color=blue)  
![License](https://img.shields.io/badge/license-ISC-blue?style=flat-square)  
![Version](https://img.shields.io/badge/version-1.0.0-success?style=flat-square)  

*Powered by cutting-edge AI technologies:*  

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-FF0000?style=flat-square&logo=imagekit&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white)

## 🌐 LIVE DEMO  
Visit the 👉 [_QUICKGPT Live_](https://quickgpt.vercel.app)

</div>

---

## 📘 Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [AI Capabilities](#ai-capabilities)
- [API Endpoints](#api-endpoints)
- [Payment Integration](#payment-integration)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)
- [Contact](#contact)

---

## 🧠 Overview
**QuickGPT** is a full-stack AI-powered content generation platform that enables users to generate intelligent text, images, and creative assets in real time.  
It combines **Generative AI**, **MERN Stack**, and **cloud technologies** to deliver seamless and scalable performance.  

Core highlights:
- 💬 **AI Chat Assistant**: GPT-based intelligent conversations  
- 🎨 **AI Image Generation**: Create visuals using AI prompts  
- 📝 **Content Creation**: Generate blogs, articles, and summaries  
- 💳 **Credit System**: Pay-per-use model with Stripe  
- 👥 **Community Sharing**: Discover and share AI creations  

---

## 🚀 Key Features

### 🤖 AI-Powered Generation
- GPT-4 & DALL·E integration for text and image generation  
- Customizable parameters (temperature, tokens, etc.)  
- Real-time conversational interface  

### 💰 Credit System
- Pay-per-use credits  
- Stripe payment integration  
- Free trial credits for new users  

### 👤 User Management
- JWT authentication  
- Profile management and content history  
- Secure, scalable REST APIs  

### 🖼️ Media Management
- ImageKit CDN integration  
- Optimized image storage and delivery  

---

## ⚙️ Tech Stack

### Frontend
- React 19 + Vite  
- Tailwind CSS  
- Axios & React Router  
- React Hot Toast for notifications  

### Backend
- Node.js + Express 5  
- MongoDB & Mongoose  
- OpenAI API integration  
- Stripe & ImageKit  

### DevOps / Cloud
- Vercel (Frontend)  
- Render / Railway (Backend)  
- MongoDB Atlas (Database)  
- Docker & CI/CD Workflows  

---

## 🧩 Architecture
```
QuickGPT/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── context/       # Global state management
│   │   └── main.jsx       # Entry point
│   └── package.json       
│
├── server/                # Express Backend
│   ├── config/            
│   ├── controllers/       
│   ├── models/            
│   ├── routes/            
│   └── server.js          
└── LICENSE
```

---

## 🧰 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- OpenAI, ImageKit, and Stripe API keys

### Installation
```bash
git clone https://github.com/harshkushwaha7x/QuickGPT.git
cd QuickGPT
```

#### Install Dependencies
```bash
cd client && npm install
cd server && npm install
```

#### Environment Variables
**Client (.env):**
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_IMAGEKIT_URL_ENDPOINT=your-imagekit-endpoint
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Server (.env):**
```env
MONGODB_URI=your-mongodb-uri
OPENAI_API_KEY=sk-your-openai-key
STRIPE_SECRET_KEY=sk_test_...
JWT_SECRET=your-jwt-secret
PORT=5000
```

#### Run Project
```bash
# Terminal 1
cd server && npm run server

# Terminal 2
cd client && npm run dev
```

---

## 🧠 AI Capabilities
- GPT-4 text generation  
- DALL·E image generation  
- LangChain and prompt optimization  
- Real-time streaming responses  

---

## 💳 Payment Integration
- Stripe for secure payments  
- Free trial credits  
- Transaction history tracking  

---

## ☁️ Deployment
- Frontend → Vercel  
- Backend → Render/Railway  
- Database → MongoDB Atlas  

---

## ⚡ Performance
- Vite-optimized builds  
- Fast API response times  
- Secure JWT auth  
- Cloud-hosted services  

---

## 🤝 Contributing
1. Fork this repository  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m "Add new feature"`)  
4. Push & open a Pull Request  

---

## 🪪 License
Distributed under the ISC License.  
See the [LICENSE](LICENSE) file for details.  

---

## 💬 Support
For support, reach out via email or GitHub issues.  
**Email:** [harshkushwaha4151@gmail.com](mailto:harshkushwaha4151@gmail.com)

---

## 📞 Contact
**Harsh Kushwaha**  
🌐 [Portfolio](https://harshkushwaha7x.github.io/Portfolio)  
💻 [GitHub](https://github.com/harshkushwaha7x)  
🔗 [LinkedIn](https://www.linkedin.com/in/harshkushwaha7x/)  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harshkushwaha7x/)  
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/harshkushwaha7x)  

---

<div align="center">

**QUICKGPT** – Unleash Your Creativity with AI 🚀  
*Built with ❤️ by [Harsh Kushwaha](https://harshkushwaha7x.github.io/Portfolio)*  

[⬆ Back to Top](#table-of-contents)

</div>
