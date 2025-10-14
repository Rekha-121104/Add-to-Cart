# AddToCartApp

A React + Tailwind CSS app that fetches products from the Fake Store API and lets users add items to a cart with duplicate prevention, a cart modal, responsive layout, and subtle animations.

## Features
- Fetch products from `https://fakestoreapi.com/products`
- Responsive grid of products (image, title, price)
- Add to Cart with duplicate check (alerts if already added)
- Navbar with live cart count
- Cart modal lists items, allows remove, and shows total
- Close modal by clicking outside or pressing ESC
- Hover effects on cards and fade-in animation for modal

## Tech Stack
- React 18 + Vite 5
- Tailwind CSS 3
- JavaScript (ES Modules)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```
Open the displayed URL (e.g., `http://localhost:5173`).

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Structure
```
AddToCartApp/
  src/
    components/
      Navbar.jsx
      ProductCard.jsx
      CartModal.jsx
    hooks/
      useCart.js
    App.jsx
    main.jsx
    index.css
  index.html
  tailwind.config.js
  postcss.config.js
  vite.config.js
  package.json
```

## Notes
- Prices come from the API and are summed for the total.
- Duplicate additions trigger a simple `alert`, per requirements.
- Tailwind classes handle styling; tweak as needed.

