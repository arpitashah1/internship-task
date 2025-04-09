# Internship - Task Documentation

## Overview
This is a modern React web application built as a task for a front-end development internship. The app integrates with the DummyJSON API and includes login functionality, protected routes, user profile viewing, and paginated product listings with detail views.

## Tech Stack
- **React** (with Hooks)
- **React Router DOM** (for routing)
- **CSS** (modern responsive UI with custom styles)
- **DummyJSON API** (for user and product data)

---

## Features Implemented

### 1. **Login Functionality**
- User must enter valid email and password from the DummyJSON users API.
- If credentials match a user, they are logged in and redirected to the profile page.
- Invalid credentials show an error message.
- Login form is styled with modern CSS and background image overlay.

### 2. **Post-Login Functionality**
- Upon successful login:
  - The authenticated user is redirected to their **profile page**.
  - Only that user’s data is shown (cannot access other users).

### 3. **Protected Routes**
- Profile, Products, and Product Detail pages are all protected.
- If a user tries to access them without logging in, they are redirected to `/login`.

### 4. **Profile Page**
- Displays the current user’s:
  - Full name
  - Email
- Includes buttons for:
  - Viewing products
  - Logging out
- Styled with centered card layout and modern UI.

### 5. **Products Listing Page**
- Fetches and displays 10 products per page from the DummyJSON products API.
- Includes pagination (Next & Previous buttons).
- Each product title links to a detailed product view.

### 6. **Product Detail Page**
- Displays selected product’s:
  - Title
  - Description
  - Price
  - Brand
  - Thumbnail image
- Fully responsive design.

---


## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dummyjson-react-app.git
```

2. Navigate to the project folder:
```bash
cd dummyjson-react-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

---

## Notes
- This app uses **localStorage** to persist user login state.
- All protected routes are wrapped using a custom `Privateroute` component.
- Styling is handled via plain CSS with a modern design aesthetic.

---

## Conclusion
The application meets all the task requirements:
- Secure login & session handling
- User profile isolation
- Product browsing & detail view
- Clean and modern UI with CSS

Ready for submission ✅

