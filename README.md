# Secrets - Secure User Authentication and Authorization
All levels of Authentication.  Secrets Vault is a web application that allows users to securely authenticate, register, and access a community-driven collection of secrets and anonymous confessions. It provides a platform where users can share their secrets while ensuring privacy and anonymity. This project is inspired by the whisper App (www.whisper.sh)

## Features: 
User Authentication: Seamlessly authenticate users using a combination of local authentication and Google OAuth 2.0. The user's identity is managed using Passport.js, ensuring a secure and reliable authentication process.

User Registration: Users can create an account by registering with a unique username and password. Passwords are securely hashed and stored using Mongoose and Passport-Local-Mongoose, ensuring data privacy.

Google OAuth 2.0: Leverage the power of Google authentication to enable users to log in using their Google accounts. The Passport-Google-OAuth2 strategy is implemented for a seamless third-party authentication experience.

Anonymous Secrets: Registered users can anonymously share their secrets, which are displayed on the platform in a fun and engaging way. This feature encourages user engagement and provides a sense of community.

User Authorization: Implement robust user authorization logic to control access to routes and features. Users can only view and submit secrets when logged in, enhancing data security.

Session Management: Manage user sessions and ensure that user login status is maintained across different pages. The Express-Session middleware is used for effective session management.

## Installation and Usage: 
Clone the repository to your local machine.

Install the required dependencies by running npm install.

Set up your environment variables by creating a .env file and providing the necessary values, such as CLIENT_ID and CLIENT_SECRET for Google OAuth.

Launch the application using the command node app.js.

Access the application in your web browser at http://localhost:3000.

## Technologies Used: 
Node.js and Express.js: For building the server-side application and handling routes.

Passport.js: For implementing user authentication and authorization strategies.

MongoDB and Mongoose: For database storage and interaction.

EJS (Embedded JavaScript): For rendering dynamic HTML templates.

Google OAuth 2.0: For secure and streamlined third-party authentication.

Facebook paasport authentication strategy for streamlined third-party authentication.

Express-Session: For managing user sessions and login status.

## Contribution: 
Contributions to the project are welcome! If you find any issues, have suggestions for improvements, or want to add new features, feel free to submit a pull request.

