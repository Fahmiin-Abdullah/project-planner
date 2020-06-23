# project-planner
A simple project planner based off of this tutorial (https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3). The objective of the app is to be able to add projects for your organization. This includes displaying the list of projects and being able to sign up new users. This project also implements cloud functions for real-time notifications.

### Project details
The project is built on React, Redux with Firebase (auth, firestore, hosting, functions) for the serverless backend.

### Instructions for use
1. A display of all saved projects and notifications in the DB can be seen when the dashboard is loaded.
2. Only signed in users can view dashboard and create new projects.
3. Navigate using the navbar on sections of the app.

### Final thoughts
1. This was a relatively difficult project to grind through as it requires a good understanding of React, Redux and Firebase to follow along. I have used firebase before mainly for firestore and hosting but this project dives into other features Firebase provide for us and how it all ties up to React-Redux.
2. Main concept of Redux requires practice to grasp and some of the code are outdated, especially in connecting the React app to Firebase(currently updated to V.3). Contact the author of the project in case errors are still found in the app.
3. Cloud functions are handy when it comes to delivering real-time updates when triggered. The triggers are correlated to Firebase(like collection creation or user sign up) and is what's used to call the deployed functions.
4. When initializing Firebase, set the public folder to build as that is what React will output when building for production.
