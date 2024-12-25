# Shopbit - E-commerce Application

Shopbit is a simple e-commerce platform where users can register, log in, view items, and add new items to the store. The application is built using Node.js, Express, MongoDB, and EJS.

## Features

- **User Authentication**: Users can register, log in, and securely store their passwords.
- **Item Management**: Admins can add new items with details like name, price, rating, description, and image.
- **MongoDB Integration**: The app uses MongoDB to store user and item data.
- **Responsive Design**: The application is built with a focus on both functionality and simplicity.

## Technologies Used

- **Node.js**: JavaScript runtime used for the server-side logic.
- **Express.js**: Web framework for Node.js to handle routing.
- **MongoDB**: NoSQL database to store user and item data.
- **EJS**: Templating engine to render dynamic HTML pages.
- **bcryptjs**: A library to hash and compare passwords securely.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (locally or via a cloud service like MongoDB Atlas)

### Steps to Run the Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/shopbit.git
Install dependencies:

Navigate to the project directory and install required dependencies using npm:

bash
Copy code
cd shopbit
npm install
Setup MongoDB:

Make sure MongoDB is running locally on port 27017 or connect to your MongoDB Atlas instance by updating the connection string in app.js:

javascript
Copy code
mongoose.connect("mongodb://localhost/shopbit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Start the server:

Run the application using the following command:

bash
Copy code
npm start
The server will be available at http://localhost:3000.

Navigate the application:

Home Route (/): Displays the homepage.
Register (/register): Allows users to create an account.
Login (/login): Users can log in with their email and password.
Shopbit (/shopbit): Displays all available items.
Add Item (/add-item): Admins can add new items to the store.
Database Models
User Model
The User model is used to store user data with the following fields:

fullName: The user's full name (required).
email: The user's email (required, unique).
password: The user's hashed password (required).
Before saving, the password is hashed using bcrypt.

Item Model
The Item model is used to store product data with the following fields:

name: The name of the item.
price: The price of the item.
rating: The rating of the item.
description: A short description of the item.
image: A URL to the image of the item.
Future Improvements
Implement user roles (Admin, User, etc.) for better access control.
Add features like cart, checkout, and order management.
Add input validation and error handling for better user experience.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
MongoDB, Express, Node.js, and EJS for the core technologies used.
bcryptjs for password hashing.
