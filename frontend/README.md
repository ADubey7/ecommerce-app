# 🛒 E-commerce Web Application

A full-stack E-commerce web application built using **Next.js**, **Node.js**, **Express**, and **MongoDB**. It allows users to browse products, add them to the cart, and view an order summary. The backend is connected to a MongoDB database using Mongoose.

---

## 🚀 Features

- 🛍️ Product listing with images  
- 🛒 Add to cart & manage quantity  
- 💵 Order summary  
- 📱 Responsive design using Tailwind CSS  
- 🌐 MongoDB (Compass or Atlas)  
- 📦 Modular folder structure  

---

## ⚙️ Setup Instructions

### 📦 Clone the Repository

```bash
git clone https://github.com/ADubey7/ecommerce-app.git
cd ecommerce-app
```
### 🛠️ Backend Setup
```bash
cd backend
npm install
```
Create a .env file inside the backend/ folder with the following content:
```env
PORT=5000
DB_URL=mongodb://localhost:27017/ecommerce
```
Start the backend server:
```bash
npm run dev
```
### 💻 Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Then open your browser at: http://localhost:3000

## ✅ Requirements
Node.js (v16 or later)

MongoDB (local via Compass or cloud via Atlas)

