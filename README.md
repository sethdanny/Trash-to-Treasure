# Trash-to-Treasure
A Waste picking system for clean envioronment.
## Requirements
### Frontend
* HTML, CSS, AND JavaScript
* React JS library and Bootstrap Framework

### Backend 
* Node.js 
* Express
* MongoDB Atlas
* 
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

