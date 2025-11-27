# Ecofynn - E-commerce Application

This is an e-commerce application built with a React frontend and a Node.js backend.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Backend Mailer](#backend-mailer)

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast frontend build tool.
- **HTML/CSS**: For structuring and styling the web pages.
- **JavaScript**: For frontend logic and interactivity.

### Backend
- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web application framework for Node.js (assuming this based on common Node.js setups, will confirm if backend files are provided).
- **Nodemailer**: For sending emails from the Node.js application.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Frontend Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/K-Sakthi-Vel/EcoFynn.git
    cd ecofynn
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The frontend application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Backend Setup (Assumed to be in a separate `backend` directory, if applicable)

(Note: This section assumes a separate backend directory. If the backend is integrated, these steps may need adjustment based on the actual project structure.)

1.  **Navigate to the backend directory:**
    ```bash
    cd ../backend # Adjust path if backend is not in a parent directory
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure environment variables:**
    Create a `.env` file in the backend directory and add necessary variables, e.g.:
    ```
    PORT=5000
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    ```
    (Replace `your_email@example.com` and `your_email_password` with actual credentials for Nodemailer.)

4.  **Start the backend server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The backend API will be available at `http://localhost:5000` (or the port specified in your `.env` file).

## Backend Mailer

The backend utilizes **Nodemailer** to send emails to users. This functionality is typically used for:
- Order confirmations
- Password reset links
- Promotional emails
- **Sending product brochures/catalogues** as requested.

### Configuration
Nodemailer is configured with SMTP transport using credentials provided in the `.env` file (e.g., `EMAIL_USER`, `EMAIL_PASS`). Ensure these are correctly set up for email sending to function.
