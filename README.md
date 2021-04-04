# to-do-app

This is a web app built using React JS and Webpack with offline first capability provided by PouchDB via eFishery's pouchy-store.

This is link for production view: https://feliex1992.github.io/

## Installation

* Make a copy of this repository
* Open a terminal and ```cd``` into the folder
* Install the dependencies using ```npm install``` command inside the root directory.
* Create a ```.env``` file in the root directory to configure the URL of the remote CouchDB instance. Take a look at the provided ```.env.example``` file as a reference. 

## Usage

* ```cd``` into the root folder
* Run server for development by ```npm start``` command and web app will be automaticaly open in browser.
* To build for production by ```npm run build```.
* In login page, use email gmail for access app.

## Capability

* This is a Progressive Web App, you can try capability this web app as a production mode in https://feliex1992.github.io/.
* This web app can run like a desktop app. so you can use this web app without Internet connection.

## Feature

* Create a new to do task.
* Edit task in list.
* Set task in list to Done.
* Delete task.
* Filter task list between Open task and Done task.