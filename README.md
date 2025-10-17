<div align="center">

# QUICKGPT 🤖  

**QuickGPT** is a cutting-edge content generation platform built using advanced AI technologies. It includes an intuitive user interface, fast processing, and seamless integration for generating text content — ideal for writers, marketers, and businesses.

[Live Demo](https://quick-gpt-ai-assistant.vercel.app/) • [Portfolio](https://harshkushwaha7x.github.io/Portflio.2/) • [GitHub](https://github.com/harshkushwaha7x/QuickGPT-AI-Assistant)

</div>

---

<p align="center">
  <a href="https://github.com/harshkushwaha7x/QuickGPT-AI-Assistant"><img src="https://img.shields.io/github/last-commit/harshkushwaha7x/QuickGPT-AI-Assistant?style=flat-square" alt="last commit"></a>
  <a href="https://github.com/harshkushwaha7x/QuickGPT-AI-Assistant"><img src="https://img.shields.io/github/languages/top/harshkushwaha7x/QuickGPT-AI-Assistant?style=flat-square" alt="languages"></a>
  <a href="https://github.com/harshkushwaha7x/QuickGPT-AI-Assistant/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="license" /></a>
  <img src="https://img.shields.io/badge/version-1.0.0-success?style=flat-square" alt="version" />
</p>

</div>

---

## 🧠 Overview
**QuickGPT** is a full-stack AI-powered content generation platform that enables users to generate intelligent text, images, and creative assets in real time.  
It combines **Generative AI**, **MERN Stack**, and **cloud technologies** to deliver seamless and scalable performance.  

Core highlights:
- 💬 **AI Chat Assistant**: Gemini Pro-powered intelligent conversations  
- 🎨 **AI Image Generation**: Create visuals using ImageKit AI prompts  
- 💳 **Credit System**: Pay-per-use model with Stripe integration  
- 👥 **Community Gallery**: Discover and share AI-generated images  
- 🔐 **Secure Authentication**: JWT-based user management  

---

## 🚀 Key Features

### 🤖 AI-Powered Generation
- Google Gemini Pro for intelligent text conversations  
- ImageKit AI for high-quality image generation  
- Real-time chat interface with message history  
- Credit-based usage system (1 credit for text, 2 for images)  

### 💰 Credit System
- Pay-per-use credits (1 for text, 2 for images)  
- Stripe payment integration with 3 plans (Basic $10/100 credits, Pro $20/500 credits, Premium $30/1000 credits)  
- 5 free trial credits for new users  

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
- React 19.1.1 + Vite  
- Tailwind CSS  
- Axios & React Router DOM  
- React Hot Toast for notifications  
- React Markdown & Prism.js for rendering

### Backend
- Node.js + Express 5  
- MongoDB & Mongoose  
- Google Gemini Pro API integration  
- Stripe & ImageKit  
- JWT Authentication & bcryptjs

### DevOps / Cloud
- Vercel (Frontend)  
- Render / Railway (Backend)  
- MongoDB Atlas (Database)  
- Docker & CI/CD Workflows (optional)

---

## 🧩 Architecture
```text
QuickGPT/
├── client/                 # React Frontend (Vite + Tailwind)
│   ├── src/
│   │   ├── components/    # ChatBox, Sidebar UI components
│   │   ├── pages/         # Login, Credits, Community, Loading
│   │   ├── context/       # AppContext for global state
│   │   ├── assets/        # Images, icons, CSS files
│   │   └── main.jsx       # Entry point
│   ├── package.json       # Dependencies & scripts
│   └── vite.config.js     # Vite configuration
│
├── server/                # Express Backend + MongoDB
│   ├── configs/           # DB, Gemini, ImageKit configs
│   ├── controllers/       # Chat, Message, User, Credit logic
│   ├── models/            # User, Chat, Transaction schemas
│   ├── routes/            # API route definitions
│   ├── middlewares/       # JWT authentication middleware
│   └── server.js          # Express server setup
│
├── .gitignore             # Git ignore rules
├── LICENSE                # MIT License
└── README.md              # Project documentation
```

---

## 🧰 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Google Gemini Pro API key
- ImageKit account (Public, Private keys + URL endpoint)
- Stripe account for payments

### Installation
```bash
git clone https://github.com/harshkushwaha7x/QuickGPT-AI-Assistant.git
cd QuickGPT-AI-Assistant
```

#### Install Dependencies
```bash
cd client && npm install
cd server && npm install
```

#### Environment Variables
**Client (.env):**
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_IMAGEKIT_URL_ENDPOINT=your-imagekit-endpoint
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Server (.env):**
```env
MONGODB_URI=your-mongodb-uri
GEMINI_API_KEY=your-gemini-api-key
IMAGEKIT_URL_ENDPOINT=your-imagekit-endpoint
IMAGEKIT_PUBLIC_KEY=your-imagekit-public-key
IMAGEKIT_PRIVATE_KEY=your-imagekit-private-key
STRIPE_SECRET_KEY=sk_test_...
JWT_SECRET=your-jwt-secret
PORT=3000
```

#### Run Project
```bash
# Terminal 1 - Start Backend (Port 3000)
cd server && npm run server

# Terminal 2 - Start Frontend (Port 5173)
cd client && npm run dev
```

---

## 🧠 AI Capabilities
- **Google Gemini Pro**: Advanced text generation and conversations  
- **ImageKit AI**: High-quality image generation from text prompts  
- **Real-time Chat**: Instant message processing and responses  
- **Smart Credit System**: 1 credit for text, 2 credits for images  

---

## 💳 Payment Integration
- Stripe for secure payments  
- Free trial credits  
- Transaction history tracking  

---

## 🔌 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login  
- `GET /api/user/data` - Get user profile

### Chat Management
- `GET /api/chat/create` - Create new chat
- `GET /api/chat/get` - Get all user chats
- `POST /api/chat/delete` - Delete specific chat

### AI Generation
- `POST /api/message/text` - Generate AI text response (1 credit)
- `POST /api/message/image` - Generate AI image (2 credits)

### Credits & Payments
- `GET /api/credit/plan` - Get available credit plans
- `POST /api/credit/purchase` - Purchase credit plan
- `POST /api/stripe` - Stripe webhook handler

### Community
- `GET /api/user/published-images` - Get community gallery images

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
This project is licensed under the **MIT License** — see [LICENSE](https://github.com/harshkushwaha7x/QuickGPT-AI-Assistant/blob/main/LICENSE).

---

## 📬 Contact
**Harsh Kushwaha** — Developer & Maintainer  
- Portfolio: https://harshkushwaha7x.github.io/Portfolio  
- GitHub: https://github.com/harshkushwaha7x/QuickCart-E-Commerce  
- LinkedIn: https://www.linkedin.com/in/harshkushwaha7x/  
- Email: harshkushwaha4151@gmail.com

---

<div align="center">

**QUICKGPT** – Unleash Your Creativity with AI 🚀  
Built by <b>Harsh Kushwaha</b>
</div>
