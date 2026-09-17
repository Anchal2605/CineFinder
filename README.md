# 🎬 CineFinder

A full-stack movie discovery web application built with **React** and **Node.js**. CineFinder allows users to explore popular movies through data fetched from the TMDB API, with user authentication powered by a MySQL database.

## Overview

CineFinder is a movie discovery platform designed to help users browse, search, and explore movies in a clean, responsive, and cinematic interface. It features a full authentication system with JWT-based login/signup, user profile management, and watch history tracking — all backed by a Node.js/Express server with MySQL.

## Features

- 🔍 Browse and search popular movies in real-time
- 🎞️ Fetch live movie data using the TMDB API
- 🖼️ Display movie posters, titles, ratings, and release years
- ⭐ Select movies and update the featured hero section
- 🔐 User authentication (Login & Signup) with JWT
- 👤 User profile & account settings (update name, email, password)
- 📜 Watch history tracking
- 🛡️ Protected routes for authenticated users
- 📱 Fully responsive design — mobile, tablet, and desktop
- 🎨 Modern dark-themed cinematic UI

## Tech Stack

### Frontend
- **React 19** — UI framework
- **Vite** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **React Router DOM v7** — Client-side routing
- **Axios** — HTTP client for API calls
- **Lucide React** — Icon library

### Backend
- **Node.js** — Runtime environment
- **Express** — Web framework
- **MySQL** — Relational database (via `mysql2`)
- **JWT** (`jsonwebtoken`) — Token-based authentication
- **bcryptjs** — Password hashing
- **dotenv** — Environment variable management
- **Nodemon** — Dev server auto-restart

### External API
- **TMDB API** — Movie data source

## Project Structure

```
Cine-Finder-React/
├── public/                  # Static assets
├── server/                  # Backend (Node.js + Express)
│   ├── config/              # Database configuration
│   ├── controllers/         # Route handlers
│   ├── middleware/           # Auth middleware (JWT)
│   ├── routes/              # API route definitions
│   ├── server.js            # Express entry point
│   ├── package.json
│   └── .env                 # Backend env variables (not tracked)
├── src/                     # Frontend (React)
│   ├── DashBoard/           # Dashboard components
│   │   ├── DashBoard.jsx    # Main dashboard layout
│   │   ├── Navbar.jsx       # Top navigation bar
│   │   ├── sideBar.jsx      # Sidebar navigation
│   │   ├── heroSection.jsx  # Featured movie hero section
│   │   ├── movieSection.jsx # Movie grid display
│   │   └── Settings.jsx     # Account settings page
│   ├── Landingpage/         # Landing page components
│   ├── Pages/               # Login, Signup, Dashboard pages
│   ├── services/            # API service layer (Axios)
│   ├── assets/              # Images and static assets
│   ├── App.jsx              # Root component with routes
│   ├── main.jsx             # React entry point
│   ├── ProtectedRoute.jsx   # Auth route guard
│   └── index.css            # Global styles
├── .env                     # Frontend env variables (not tracked)
├── .gitignore
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Frontend dependencies & scripts
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or above)
- **MySQL** database
- **TMDB API Key** — Get one at [themoviedb.org](https://www.themoviedb.org/settings/api)

### Installation

1. **Install frontend dependencies**
   ```bash
   npm install
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

   Create a `.env` file in the `server/` directory:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=cinefinder
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```
   This starts both the frontend (Vite) and backend (Express) concurrently.

## Available Scripts

| Command              | Description                          |
|----------------------|--------------------------------------|
| `npm run dev`        | Start both frontend & backend        |
| `npm run dev:frontend` | Start only the Vite dev server     |
| `npm run dev:backend`  | Start only the Express backend     |
| `npm run build`      | Build the frontend for production    |
| `npm run preview`    | Preview the production build         |
| `npm run lint`       | Run ESLint                           |

## Application Flow

```text
Landing Page
     ↓
Login / Signup (JWT Auth)
     ↓
Dashboard (Protected Route)
     ↓
TMDB API → Movie Data → Movie Cards
     ↓
Select a Movie → Featured Hero Section Updates
     ↓
Settings → Update Profile / Change Password
```

## License

This project is open source and available for personal and educational use.