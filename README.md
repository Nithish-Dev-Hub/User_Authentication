Sure, here's a more creative README file that includes the environment configuration:

---

# Project Name: AuthPortal

## 🌟 Overview
Welcome to **AuthPortal**, a full-stack web application designed to make user authentication and profile management seamless and secure. With our application, users can easily register, login, and update their profiles, all while ensuring their sessions are managed securely using JWT.

## 📁 Folder Structure
```
AuthPortal
│   README.md
│   package.json
│   .env
│
├───backend
│   ├── server.js
│   ├── routes
│   ├── models
│   ├── controllers
│   └── middleware
│
└───frontend
    ├── public
    └── src
        ├── components
        ├── pages
        ├── services
        ├── App.js
        └── index.js
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Nithish0120/User_Authentication.git
   cd mern_auth
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Install backend and frontend dependencies:**
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   cd ..
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   NODE_ENV=development
   PORT=3300
   MONGO_URI=mongodb+srv://nithish:aSSrk58oY2mBNG17@mernauth.ozot9rp.mongodb.net/mernauth?retryWrites=true&w=majority&appName=mernauth
   JWT_SECRET=abc123
   ```

### Running the Application
To run both the backend and frontend concurrently, use the following command:
```sh
npm run dev
```

### Scripts
- `npm run start`: Starts the backend server.
- `npm run server`: Starts the backend server with nodemon for auto-reloading.
- `npm run client`: Starts the frontend application.
- `npm run dev`: Runs both the backend and frontend concurrently.

## 🛠 Backend
The backend is powered by Node.js and Express.js, featuring:
- **JWT Authentication**: Secure user authentication and session management.
- **MongoDB**: Robust database for storing user data.
- **bcrypt**: Secure password hashing.

## 🎨 Frontend
The frontend, built with React.js, includes components and pages for:
- **User Registration**
- **User Login**
- **Profile Update**

## 📝 Usage
1. **Register a User**: Create a new account by providing the necessary details.
2. **Login**: Authenticate using your email and password.
3. **Update Profile**: Update your user details as needed.
4. **Logout**: Terminate the session and secure your account.

## 🤝 Contributing
We welcome pull requests! For major changes, please open an issue first to discuss what you would like to change.

## 📜 License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## 🎉 Acknowledgements
A big thank you to all the contributors and the open-source community for their invaluable support and contributions.

---

Feel free to customize this README file further to match your project's specific details and requirements.
