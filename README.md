
# Rancid Tomatillos

Mod3 2108 FE

## Table of Contents
  - [Install + Setup](#set-up)  
  - [Project Specs](#project-specs)
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Contributors](#contributors)
  - [Artists](#artists)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)

## Install + Setup

   - Clone this repo: [here](https://github.com/ccollums/rancid-tomatillos)
   - On the command line, type: **$ npm install**
   - On the command line, type: **$ npm start**
   - Visit http://localhost:3000/ in the browser
   
## Project Specs
   - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)
  
## Abstract
<p align="center">
<img src="https://media.giphy.com/media/s5tat4wG3D2tsO6ySO/giphy.gif" width="900">
</p>

  This project is designed as a dashboard app that allows users to learn more about popular movies. Upon page load, movie posters are displayed that a user can click on to learn more about that movie. 
  
<p align="center">
<img src="https://media.giphy.com/media/CMzHYb4mI7bXzbDULJ/giphy.gif" width="900" align="center">
</p>
  
  If the user clicks on a movie poster a preview is displayed. This preview provides information about the movie including the runtime, genre(s), tagline, overview, release date, budget, and revenue. The preview also has a "Watch Trailer" button that if clicked will load a preview from Youtube onto the page. Also shown is an "x" button that closes the preview and returns to the home page. 
  
  
<p align="center"> 
<img src="https://media.giphy.com/media/6UaL74M7EyCe3P73Dr/giphy.gif" width="900" align="center">
</p>
  
 A search bar allows the user to find a movie by the title. If the search bar is emptied, the dashboard will be displayed again.
 
 <p align="center">
 <img src="https://media.giphy.com/media/nFVycfHtE8Yw3gCVh1/giphy.gif" width="900" align="center">
 </p>

  The app includes a loading screen that is displayed during page loading and also can display an error message for server / url issues. 

  The goals of the project were to gain competency with React fundamentals, learn to test React components and asynchronous Javascript, and create a multi-page UX using Router. 
  
## Architecture
  Our version of the Rancid Tomatillos project pulls all of its data from a third party API provided by our instructors. On page load, we perform a fetch call and set the state of our main class component. Once the state is set the movie-posters are loaded to the DOM with dynamically created routes using movie specific IDs. If a user clicks on a movie-poster another fetch call is made that obtains more information about a specific movie to load onto the preview. 

## Technologies
  - Javascript
  - CSS HTML
  - Atom / VSCode
  - Git Version Control / GitHub
  - Webpack node package
  - React 
  - Router
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line
  - Cypress

## Contributors
  - [Carly Collums](https://github.com/ccollums)
  - [David Tran](https://github.com/isleofyou)

## Artists
- Loader by Rohith M S from NounProject.com
- Tomato by Olga from NounProject.com
- Magnify by TS Graphics from NounProject.com
- X by Imam from NounProject.com
- Play Button by Mike Rowe from NounProject.com

## Wins
  - Successfully refactored our app to add Router V6 functionality. 
  - Successfully created our first React app.
  - Successfully used Cypress and wrote tests to confirm the app was functioning as intended.
  - Successfully impplemented error handling for server issues and nonexisting URLs. 

## Challenges + Improvements
  - The team initially faced challenges refactoring the code to work with Router. We essentially had to rewire the entire application to work dynamically through pathing.
  - The app initially had a lot of timing errors. We discovered a need to add properties to our state that assisted with timing errors. 
  
  - We plan to improve the UX further by making the page more responsive with resizing.
  - We also plan on adding a favoriting option
  - In our next iteration we would also like to add more functionality to the search option, such as typing in specific genres.

