# Le CelesteBD 🍽️

**Le CelesteBD** is a full-stack restaurant web application where customers can explore menus, order food online, make table reservations, and securely pay using Stripe. It also includes a powerful admin dashboard for restaurant staff to manage users, food items, reservations, and revenue.

---

## 🛠 Tech Stack

### Frontend
- **React** 19
- **Tailwind CSS**
- **React Router DOM** 7
- **Firebase Authentication**
- **Stripe** for payments
- **React Hook Form** for form handling
- **React Query** for data fetching
- **SweetAlert2**, **Swiper**, **Recharts**, **Lottie**, and more for UI/UX

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT** for authentication
- **Stripe** for payment processing

---

## ✨ Features

### 👨‍🍳 Customer Features
- Browse the full **food menu**
- **Add to cart** and place food **orders**
- **Make table reservations** online
- **Secure payments** via Stripe
- View **order history** and **cancel orders**
- View and cancel **reservation requests**
- Access a **user dashboard** with all personal activity

### 🛠️ Admin Features
- **Manage users** (change role, delete user)
- **Add, update, or delete** food items
- View and manage **reservation requests**
- Access full **payment history**
- Track **total revenue**, **total products**, and **user count**
- Fully functional **admin dashboard**

---

## 📁 Project Structure

/
├── client/                 # React frontend (Le CelesteBD)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── firebase/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── providers/
│   │   ├── routes/
│   │   ├── main.jsx
│   │   └── App.css
│   ├── .env.local
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── postcss.config.js
│
├── server/                # Node.js + Express backend     
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   └── vercel.json
│
└── README.md



---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/le-celestebd.git
cd le-celestebd
 

2. Setup Frontend (Client) 
cd client
npm install
npm run dev  # or npm start

3. Setup Backend (Server)
cd server
npm install
npm run start

4. Environment Variables
for client
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
...

for server
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret

---

🧾 Dependencies
Full list of dependencies used in package.json (client & server) includes:

React 19, Tailwind CSS, Firebase

Stripe, React Query, Axios, Recharts

Node.js, Express, MongoDB, JWT, Stripe

## 📷 Screenshots

### 🏠 Home Page
![Home Page](./screenshots/jpg)

### 🍽️ Menu Page
![Menu](./screenshots/menu.jpg)

### 🍽️ Order Page
![Menu](./screenshots/order.jpg)

### 📊 Admin Dashboard
![Dashboard](./screenshots/ad.jpg)

### 📊 User Dashboard
![Dashboard](./screenshots/dashboard.jpg)

### 💳 Payment Interface
![Payment](./screenshots/payment.jpg)

🌐 Live Demo
lecelestebd.web.app



## 💬 Contact
Feel free to connect if you have any questions or suggestions.

Email: rahmantoymur2@gmail.com

Website: lecelestebd.web.app 
