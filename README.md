# My Personal Portfolio

Welcome to my personal portfolio website! This project is built using React and showcases my professional journey, projects, and skills.

## Overview

This application acts as a digital resume and portfolio, allowing visitors to explore:

*   **Home**: A brief introduction.
*   **Portfolio Highlights**: A showcase of my key projects (`/projects`).
*   **Experience**: My professional work history (`/experience`).
*   **Education**: My academic background (`/education`).

The project is built with:
*   [React](https://reactjs.org/)
*   [React Router](https://reactrouter.com/) for navigation.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository (if you haven't already):
    ```bash
    git clone https://github.com/lukerjin/my-portfolio.git
    cd my-portfolio
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

Start the development server:
```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Building for Production

To build the app for production to the `build` folder:
```bash
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

This project is configured to deploy to GitHub Pages.

To deploy the latest version:
```bash
npm run deploy
```

This command builds the project and pushes the build artifacts to the `gh-pages` branch.

## Pushing Changes to GitHub

If you have made changes and want to save them to your repository, follow these steps:

1.  **Initialize Git** (if not already done):
    ```bash
    git init
    ```

2.  **Add Remote Origin** (replace with your repository URL if different):
    ```bash
    git remote add origin https://github.com/lukerjin/my-portfolio.git
    ```
    *Note: You can check existing remotes with `git remote -v`.*

3.  **Stage Changes**:
    ```bash
    git add .
    ```

4.  **Commit Changes**:
    ```bash
    git commit -m "Description of your changes"
    ```

5.  **Push to GitHub**:
    ```bash
    git push origin main
    ```
    *If this is your first push or the branch doesn't exist upstream:*
    ```bash
    git push -u origin main
    ```

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
