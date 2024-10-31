Task Manager REST API
This is a RESTful API for a Task Manager application, built using Express.js and MongoDB. The API allows users to manage their daily tasks as well as long-range tasks, providing features like task creation, updating, deletion, and retrieval.

Features
User Authentication: Secure user registration and login using JWT.
Daily Tasks Management: Create, update, delete, and retrieve daily tasks.
Long-Range Tasks Management: Manage tasks with longer deadlines.
Task Categorization: Organize tasks into categories for better management.
Automatic Task Archiving: Automatically archive completed tasks after a set duration.
Efficient Filtering and Sorting: Retrieve tasks based on specific filters, such as due dates or priorities.
Notification System: (Planned) Remind users of important tasks via notifications.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Libraries: Mongoose, bcrypt, dotenv, and more.
Getting Started
Prerequisites
Node.js and npm installed on your machine.
MongoDB running locally or a MongoDB Atlas account.
Installation
Clone the repository:
bash
Copier le code
git clone https://github.com/yourusername/task-manager-api.git
Navigate to the project directory:
bash
Copier le code
cd task-manager-api
Install dependencies:
bash
Copier le code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:
env
Copier le code
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
Start the server:
bash
Copier le code
npm start
API Endpoints
User Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Login and receive a token
Daily Tasks
GET /api/tasks/daily: Retrieve all daily tasks
POST /api/tasks/daily: Create a new daily task
PUT /api/tasks/daily/:id: Update a specific daily task
DELETE /api/tasks/daily/:id: Delete a specific daily task
Long-Range Tasks
GET /api/tasks/long-range: Retrieve all long-range tasks
POST /api/tasks/long-range: Create a new long-range task
PUT /api/tasks/long-range/:id: Update a specific long-range task
DELETE /api/tasks/long-range/:id: Delete a specific long-range task
Project Structure
bash
Copier le code
/task-manager-api
│
├── /config            # Database and configuration settings
├── /controllers       # Controller functions for handling requests
├── /models            # Mongoose models for tasks and users
├── /routes            # Route definitions for different endpoints
├── /middleware        # Custom middleware (e.g., for authentication)
├── /utils             # Utility functions
├── .env.example       # Example of environment variables file
├── app.js             # Main app configuration
└── server.js          # Server setup
Future Enhancements
Reminders and Notifications
Task Sharing: Collaborate with other users on specific tasks.
Task Analytics: Visualize task completion statistics.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
License
This project is licensed under the MIT License.

Contact
Author: zine abderahim
Email: a_zine@estin.dz
GitHub: rx7iiim
