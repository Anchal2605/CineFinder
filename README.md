# CineFinder

A responsive movie discovery web application built with React. CineFinder allows users to explore popular movies through data fetched from the TMDB API and provides a modern, cinematic user interface.

## Overview

CineFinder is a frontend movie discovery application designed to help users browse and explore movies in a clean and responsive interface.

The application integrates with the TMDB API to fetch real-time movie data, including movie titles, posters, release dates, and ratings.

## Features

- Browse popular movies
- Fetch real movie data using the TMDB API
- Display movie posters, titles, ratings, and release years
- Select movies and update the featured movie section
- User authentication interface with Login and Signup pages
- Protected route implementation
- Responsive design for mobile, tablet, and desktop
- Modern cinematic user interface

## Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS

**Libraries**
- React Router DOM
- Axios
- Lucide React

**API**
- TMDB API

## Application Flow

```text
Landing Page
     ↓
Login / Signup
     ↓
Dashboard
     ↓
TMDB API Request
     ↓
Movie Data
     ↓
Movie Cards
     ↓
Select a Movie
     ↓
Featured Movie Section Updates