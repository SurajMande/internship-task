# Course Enrollment Web Application

---

## 🔧 Project Structure

```
/
├── backend/   # Express + MongoDB API
├── frontend/  # React + Vite UI
```

---

# 📡 Backend

This is the backend of the Course Enrollment application, built with **Node.js** and **Express**.

## 🛠️ Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose

## 📁 Project Structure

```
backend/
├── app.js
├── controllers/
│   ├── courseController.js
│   └── enrollmentController.js
├── models/
│   ├── Course.js
│   ├── Enrollment.js
│   └── db.js
├── routes/
│   ├── courseRoutes.js
│   └── enrollmentRoutes.js
├── package.json
└── ...
```

## 🚀 Getting Started (Backend)

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the `backend/` directory with the following content:

```env
PORT=5000
MONGODB_URI=mongodb+srv://samande371322:8jfyCKGWcSNLXq17@cluster0.b24vzby.mongodb.net/internship
```

### 3. Run the Server

```bash
node app.js
```

> For development with auto-reloading:

```bash
npx nodemon app.js
```

## 🌐 API Endpoints

### Courses

- `GET /courses` – Get all courses

### Enrollments

- `GET /enrollments/me` – Get my enrollments  
- `POST /enrollments` – Create a new enrollment

---

# 💻 Frontend

This is the frontend of the Course Enrollment web application, built using **React** and **Vite**.

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS

## 📁 Project Structure

```
frontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
├── index.html
├── package.json
├── vite.config.js
└── ...
```

## 🧪 Getting Started (Frontend)

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

