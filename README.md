# BE Fullstack Recipe App

## Project Description

The BE_Fullstack_Recipe_App is a full-stack web application designed to manage recipes.The application allows users to create, view, update, and delete (CRUD) recipes with features like ingredient search.It is built using a modern stack including React for the frontend and Express.js for the backend.

## Features

- 🍽️ Create, read, update, and delete (CRUD) recipes
- 🗂️ Categorize recipes (e.g., Breakfast, Lunch, Dinner)
- 🔍 Search recipes by name
- 📝 Save and edit personal favorite recipes
- ⚡ Information about recipes
- 📱 Responsive design for various devices

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- React: for building dynamic user interfaces
- React Router: for navigating between pages
- React Select: for enhanced dropdown and selection inputs
- React Icons: for icon usage in the UI
- Axios: for HTTP requests to the backend
- React Query: for managing server-side data
- React Toastify: for displaying notifications
- Vite: for building and serving the frontend during development
- TailwindCSS: for responsive, utility-first CSS

### Backend

- Node.js
- Express.js
- CORS: to handle cross-origin resource sharing
- Nodemon: for automatic server restarts during development

## API Endpoints

| Method | Endpoint              | Description                 |
| ------ | --------------------- | --------------------------- |
| GET    | `/api/v1/recipes`     | Get all recipes             |
| POST   | `/api/v1/recipes`     | Add a new recipe            |
| GET    | `/api/v1/recipes/:id` | Get a specific recipe by ID |
| PATCH  | `/api/v1/recipes/:id` | Update a recipe by ID       |
| DELETE | `/api/v1/recipes/:id` | Delete a recipe by ID       |

## Setup and Installation

### Backend

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BE_Fullstack_Recipe_App.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd .\api\
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd .\client\
   ```
2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at:
   ```bash
   http://localhost:4004
   ```

## Visual

<img src="/client/public/recipe.gif" alt="recipe-app-gif">

## Contact

For any questions or suggestions, feel free to reach out:

- Email: emreertugrl7@gmail.com
- LinkedIn: [emreertugrul7](https://www.linkedin.com/in/emreertugrul7/)
