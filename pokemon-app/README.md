# HW-PokeExpressPt3

## Installation
Fork and clone the repository
```
$ git clone https://github.com/yourusername/repositoryname
```
Go to the project directory
```
$ cd repositoryname/pokemon-app
```

Install express package
```
$ npm init -y
```
```
$ npm i express
```
Make sure you have nodemon installed
```
$ npm i -g nodemon
```
Install dotenv package
```
$ npm i dotenv
```
Install react package
```
npm i express-react-views react@16 react-dom@16
```
Install mongoose
```
npm i mongoose 
```
To run the application 
```
$ nodemon
```
Open your browser and type in the localhost URL

## Assingment Description
### Purpose from Curriculum Development Team: 
Continue making a Pokemon app that displays data inside server-side rendered views.

### Learning Objectives
Practicing New and Create routes with express and Mongoose
### Prerequisites
* JavaScript
* Express
* Node
* JSX
### The User Stories
When a user goes to the /pokemon route they will see an index of pokemon: the names of each pokemon rendered to the page.
When a user clicks on the name of the pokemon, they will be taken to that pokemon's show page, and will see the pokemon's name and image.
When a user goes to /pokemon/new a user sees a form that allows them to create a brand new pokemon, and then redirects the user back to /pokemon
### Assignment
Add A Seed Route to Pokemon that adds the entire original pokemon array

Deploy your Pokemon App to Heroku at it's final complete form