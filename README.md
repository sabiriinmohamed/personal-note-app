# ELECTRONICS BUSINESS – React Registration & Login Website

This is a complete, professional, fully responsive registration and login application built for **ELECTRONICS BUSINESS**, a modern electronics company specializing in smartphones, laptops, desktop computers, 4K OLED televisions, and high-performance electronic accessories.

## 🎨 Color Palette & Typography
- **Navy**: `#172B4D`
- **Gold**: `#D29A46`
- **Light Gray**: `#F1F3F7`
- **Typography**: Playfair Display (Headings) & DM Sans (Body)

## ⚡ Features
- **Logo & Branding**: Modern technology branding featuring `ELECTRONICS BUSINESS`.
- **User Interface**: Designed with React.js, Vite, Tailwind CSS, and Lucide React icons.
- **Login Page**:
  - Live email & password validation
  - Password show/hide toggle
  - Remember me checkbox
- **Registration Page**:
  - Live input validation for full name, email, phone, password, and password confirmation
  - Dynamic password strength meter (Weak, Fair, Good, Strong)
  - Interactive Terms & Conditions modal integration
- **Dashboard / Portal**: Simulated logged-in state displaying product categories (smartphones, laptops, TVs, accessories) and account status.
- **Responsive Layout**: Pixel-perfect layout optimized for mobile, tablet, and desktop viewports.

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v16 or higher) and npm installed.

### Installation & Local Run
1. Unzip the project folder `electronics-store.zip`.
2. Open your terminal inside the `electronics-store` directory (or open the folder in VS Code):
   ```bash
   cd electronics-store
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the local URL (typically `http://localhost-[#5173]` or `http://localhost:3000`).

## 📁 File Structure
```
electronics-store/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── TermsModal.jsx
    └── pages/
        ├── Login.jsx
        ├── Register.jsx
        └── Dashboard.jsx
```

---
&copy; ELECTRONICS BUSINESS. All Rights Reserved.
