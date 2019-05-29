# Project 2: Chore Buddy

For this project, we have created an app that allows families to create chore lists, display the list of users and their associated chores, update the list by marking chores as they are completed, and then deleting them.

## Getting started

In order to run this app for testing and development purposes, you will need to execute the following commands from the CLI while in the Project-2 folder:

$ npm install

In the config.json file, you will need to change the username and password to your own for the development object.

======================

## Deployment

Deployed on Heroku at https://degoba.herokuapp.com/

======================

## Built with

-NodeJS
-Express
-Handlebars
-MySQL
-PassportJS

======================

## How it works

Step 1: When the app is started, the user is directed to the login page. If the user has an account already, they may simply enter their credentials to gain access to the main page.

![alt text](https://github.com/Olutundun/Project-2/blob/master/public/images/Login.png)

If the user does not have an account, they may click the link to the signup page, located at the bottom of the login page. Once the user creates an account, they will not be redirected back to the login page; they will be taken directly to main page.

![alt text](https://github.com/Olutundun/Project-2/blob/master/public/images/Signup.png)

Step 2: Once the user has either created an account, or logged into an existing account, the members page will display with several different regions. The first region is a container for all chores that are yet to be done, the second is a container for chores completed, the third is a form for creating new chores, and the fourth is a container for points gained from completing chores:

![alt text](https://github.com/Olutundun/Project-2/blob/master/public/images/Main-page.png)

Step 3: The user can enter a new chore in the form, assigning a point value to that chore. When they click "Submit", the Chores field will be updated with the new chore, as well as its point value. It will also have buttons with the options to mark the task as completed or to delete the task entirely:

![alt text](https://github.com/Olutundun/Project-2/blob/master/public/images/Task-added.png)

Step 4: Clicking the "Mark Complete" button will update the page. It will move the chore to the Finished Chores field,
and add that chore's point value to the total points field:

![alt text](https://github.com/Olutundun/Project-2/blob/master/public/images/Task-complete.png)

Step 5: Once a task is no longer needed, it can be deleted entirely. This will also remove that chore's point value from the total:

![alt text](https://github.com/Olutundun/Project-2/blob/master/public/images/Task-delete.png)

======================

