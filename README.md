# Library Management System

[🔗 Live Demo](https://naflanmohamed.github.io/Library-Management-System/)

Welcome to my Library Management System project repository! This application provides a user-friendly interface for managing library operations, including book cataloging, user registration, and role-based dashboards for students, teachers, and administrators.

## Table of Contents
- [About This Project](#about-this-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## About This Project

This Library Management System is a front-end prototype built with HTML, CSS, and JavaScript. It simulates a simple workflow for a library environment, supporting multiple user roles:
- **Student**: Browse available books and view personal dashboard.
- **Teacher**: Access teaching resources and manage borrowed items.
- **Administrator**: Add, edit, and remove books; manage user accounts and system settings.

A signup page allows new users to register, and a central `index.html` serves as the entry point for role-based navigation.

## Features

- **Role-Based Interfaces**: Separate pages for students, teachers, and administrators.
- **User Registration**: Sign up new library members via `signup.html`.
- **Book Management (Admin)**: Admin dashboard to add, update, and delete book entries.
- **Client-Side Validation**: Form checks for signup and book operations.

## Technology Stack

- **HTML5**: Semantic markup for structure and accessibility.
- **CSS3**: Custom styling with Flexbox and Grid for responsive layouts.
- **JavaScript (ES6)**: DOM manipulation, event handling, and form validation.

## Project Structure

```plaintext
Library-Management-System/
├── admin.html           # Admin dashboard interface
├── adminstyles.css      # Styles for admin dashboard
├── adminscript.js       # Admin-specific JavaScript logic
├── index.html           # Main landing and login page
├── indexstyles.css      # Styles for landing page
├── scripts.js           # General JavaScript for index and student/teacher pages
├── signup.html          # User registration page
├── signupstyles.css     # Styles for signup form
├── student.html         # Student dashboard interface
├── style.css            # Shared styles across pages
├── teacher.html         # Teacher dashboard interface
└── lms.png              # Project screenshot
```

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/naflanmohamed/Library-Management-System.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd Library-Management-System
   ```
3. **Open `index.html`** in your web browser to launch the app.

## Usage

- **Register**: Go to `signup.html` to create a new user account.
- **Login**: From the landing page, navigate to your role-specific dashboard.
- **Admin Actions**: In `admin.html`, use the form to add new books or manage existing entries.
- **Students and Teachers**: Browse and search the book catalog via `student.html` or `teacher.html`.

## Customization

- **Themes**: Modify colors and typography in `style.css` and individual CSS files.
- **Data Persistence**: Integrate a backend (e.g., Node.js, Firebase) to replace the client-side simulation with database-driven storage.
- **Features**: Extend functionality with book search filters, issue/return workflows, and user authentication.

## Deployment

Since this is a static front-end project, you can deploy it on any static hosting platform:

- **GitHub Pages**: Push to the `main` branch and enable Pages in repository settings.
- **Netlify**: Drag-and-drop the project folder or connect your GitHub repo.
- **Vercel**: Import the repo and deploy with default settings.

## Contact

For questions or feedback, feel free to reach out:

- **LinkedIn**: [linkedin.com/in/naflanmohamed](https://www.linkedin.com/in/naflan-mohamed)
- **GitHub**: [github.com/naflanmohamed](https://github.com/naflanmohamed)
