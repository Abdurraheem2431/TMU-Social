# CPS630 Assignment 2: CRUD Application: TMU Social

## Overview

We built a MERN web application called **TMU Social**, a social media style platform where users can sign up, sign in, create/edit/delete posts, and interact with content through comments. The core idea of the application is to provide a simple but meaningful full stack platform where users can manage their own posts while also viewing and interacting with posts from others. The project uses a React and Vite frontend, a Node.js and Express backend, and a MongoDB database connected through Mongoose.

The application includes several different views that each serve a clear purpose. The Home page displays a post feed where users can create posts, view others posts, edit or delete their own posts and comment on posts. The Profile page shows the user all the posts they have made on their account. The Search page allows users to search posts by content and filter results by newest or oldest. The Settings page allows users to update their profile picture, username, password, or delete their account.

The Home page is the main part of the application and satisfies the full CRUD requirements. The Profile page also supports meaningful CRUD-related interaction by letting users view the posts connected to their account and manage their own content more directly from a user specific page. This gives the application multiple useful views instead of placing everything in only one part of the site.

The purpose of the application is to simulate the core functionality of a social media platform while giving users a practical way to perform full stack CRUD operations. Using MongoDB allows the platform to store everything locally in a realistic way, instead of temporary in memory data. This makes the project feel more like a real application and gives it a stronger full stack foundation.

In the future, the application could be extended with features such as likes, direct messaging, notifications, following other users, stronger authentication methods and security . Search could also be improved with more advanced filtering, and the application could even be deployed to allow people to interact with each other in real time. Overall, the project establishes a strong foundation and has a lot of room for future expansion.


https://github.com/user-attachments/assets/cbf25823-e25d-48c7-90a8-d60c4dc418e5


---

## Documentation

### Project Structure

The project is split into two main folders:

- `frontend/` contains the React and Vite client
- `backend/` contains the Node.js and Express server, API routes, and MongoDB logic

---

### Setup and Run

#### Prerequisites

Before running the project, make sure the following are installed:

- Node.js
- npm
- MongoDB running locally

---

### Back End

1. Open a terminal and go into the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
npm run start
```

4. The backend runs on:

```text
http://localhost:8080
```

The backend connects to a local MongoDB database and seeds default users, posts, and comments on startup when the database collections do not already exist.

---

### Front End

1. Open a second terminal and go into the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

4. The frontend runs on:

```text
http://localhost:5173
```

---

### How to Use

- New users can register an account by entering a username and password
- Existing users can log in using their credentials
- A default test account is also available for quick access:
  - **Username:** `rob`
  - **Password:** `rob123`
- After logging in or signing up, the user is redirected into the application

#### Home Page

- View the main feed of posts
- Create a new post with text and an optional image upload
- Open comments for any post
- Add comments to posts
- Edit or delete your own posts using the post menu

#### Profile Page

- View your current username and profile picture
- View posts associated with your account

#### Search Page

- Search for posts by text content
- Sort results by newest or oldest
- Open comment sections for matching posts

#### Settings Page

- Change profile picture
- Change username
- Change password
- Delete account

---

## API Routes

### Pages

- `GET /` => Landing page
- `GET /login` => Login page
- `GET /register` => Register page
- `GET /home` => Home feed page
- `GET /profile` => Profile page
- `GET /search` => Search page
- `GET /settings` => Settings page

### REST API

- `POST /api/user` => Creates a new user account
- `GET /api/user/search?username=...&password=...` => Checks login credentials
- `GET /api/posts` => Returns multiple posts for the home feed
- `GET /api/user/pfp/:username` => Returns a user profile picture filename
- `GET /api/comments?postID=...` => Returns comments for a specific post
- `POST /api/comments` => Creates a new comment
- `POST /api/posts` => Creates a new post
- `GET /api/user?username=...` => Returns a single user by username
- `DELETE /api/posts/:id` => Deletes an existing post
- `PATCH /api/posts/:id` => Updates an existing post
- `GET /api/posts/search?username=...` => Returns posts from a specific user
- `PATCH /api/pfp` => Updates a user profile picture
- `PATCH /api/password/:username` => Updates a user password
- `PATCH /api/username/:username` => Updates a user username
- `DELETE /api/user/:username` => Deletes a user account
- `GET /api/posts/sortedsearch?search=...&sort=...` => Returns matching posts sorted by date

---

## Reflection

Our submission includes the full MERN project with both the frontend and backend folders, all source files, package configuration, static assets, database logic, and this README. The application supports account registration and login, post creation with the option to add an image, displaying and loading posts from MongoDB, adding comments, editing and deleting your own posts and searching and sorting results. We also allow users to edit their username, profile picture, password or delete their account from the settings page. In addition to the code, the submission also includes the demo video showing the application running and its features.

One of our biggest successes during this assignment was our coordination and use of GitHub as a team to organize work while keeping conflicts under control. We did a great job of working on different branches and resolving conflicts when we needed to merge. This allowed us to divide responsibilities effectively and ensure everything came together well. We also really liked the idea of building a social media style application, so it was fun to put together something that felt more interactive and realistic than a basic CRUD demo. Seeing the frontend, backend, and MongoDB all connect properly made the project feel much more complete and rewarding once the main features were working.

As for challenges, a lot of the hardest parts came from troubleshooting smaller issues across the full stack such as file uploads, styling concerns and random small bugs. At the same time, those issues were things we noticed fairly quickly and fixed as we worked. We also spent time making sure the different views stayed consistent and that invalid actions or broken requests were handled clearly instead of failing silently. Overall, we are happy with how the final application came together. This assignment helped improve our understanding of React, Express, MongoDB, Mongoose, REST APIs, and especially GitHub collaboration


---

## Submission Contents

This submission includes:

- Full `frontend` and `backend` project folders
- All required source files
- `package.json` files
- Static assets and image upload handling
- README with overview, documentation, and reflection
- Short demo video in `.mp4` format
