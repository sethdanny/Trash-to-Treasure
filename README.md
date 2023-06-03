<h1 align = "center">Trash to Treasure</h1>
<p> The trash to treasure project aims to provide a waste product picking service that will help communities dispose off their waste products in a clean and efficient manner. This project will create a platform where people can easily request waste product pickup services, and a team of waste pickups will collect, sort, and dispose off the waste properly. By doing so, we aim to promote sustainable practices and ensure a clean and healthy environment for the community. </p>

## Requirements
### Frontend
* HTML, CSS, AND JavaScript
* React JS library and Bootstrap Framework
### Backend 
* Node.js 
* Express
* MongoDB Atlas
### Applications
* Node.js
* npm - package.json
### APIs
The following APIs are created to enable the interact between different users of the system.
* Role Based userAuthentication
* wasteListings
* wastePickups
### Environment Variables
The required enviornment variables should be stored in a file named .env and each line have the format Name=value. The table below lists the environment variables that will be used by this server.

| Name  | Required  | Description |
|-------|-----------|-------------|
|PORT   | Yes (Default: 5000) | The port the server is listening too. |
|MONGO_URI| Yes  | The database uri used to connect to mongoDB Atlas Cluster having custom username, password and databasename |
|NODE_ENV    | Yes (Default: development)| The enviornment which the server is using currently |
### Installation
* Clone this repository and switch to the clone repository
* Install the packages using npm init
### Usage
Start the run using your local terminal by running npm run server.
### Tests
* Test the API endpoints using Postman