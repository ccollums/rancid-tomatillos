
# Rancid Tomatillos

Mod3 2108 FE -- This project is definitely not Rotten Tomatoes. Nor is it Netflix. Nor is it IMDB. It’s R A N C I D T O M A T I L L O S. Very different!

## Table of Contents
  - [Installation + Setup](#set-up)
  - [Deployed Site](#deployed-site)  
  - [Contributors](#contributors)
  - [Technologies](#technologies)
  - [Project Specs](#project-specs)
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Artists](#artists)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)

## Installation + Setup

   - Clone this repo down to your local machine: [here](https://github.com/ccollums/rancid-tomatillos)
   - On the command line, type: **$ npm install**
   - On the command line, type: **$ npm start**
   - Visit http://localhost:3000/ in the browser.

## Deployed Site 

[Click Here!](https://ccollums.github.io/rancid-tomatillos/)

## Contributors
  - [Carly Collums](https://github.com/ccollums)
  - [David Tran](https://github.com/isleofyou)

## Technologies
  - Javascript
  - CSS / HTML
  - Atom / VSCode
  - Git Version Control / GitHub
  - Webpack node package
  - React 
  - Router
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line
  - Cypress

   
## Project Specs
   - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)
  
## Abstract

This project is designed as a dashboard application that allows users to learn more about popular movies. Upon page load, a number of movie posters are displayed that a user can click on to see the details of that specific movie. A search bar on the main dashboard allows the user to find a movie by title. If the search bar is emptied, the dashboard will display all of the movies again. When the user clicks on a movie poster a preview is displayed. This preview provides information about the movie including the runtime, genre(s), tagline, overview, release date, budget, and revenue. The preview also has a "Watch Trailer" button that if clicked will load a preview embedded from Youtube to the bottom of the page. Also shown on this page is an "x" button that closes the preview and returns to the home page. The app includes a loading screen that is displayed during page load and also can display an error message for server / url issues. 

The goals of this project were to gain competency with React fundamentals, learn to test React components and asynchronous Javascript, and create a multi-page UX using Router. 
 
## Main Dashboard 

<p align="center">
<img src="https://media.giphy.com/media/s5tat4wG3D2tsO6ySO/giphy.gif" width="900">
</p>
  
## Movie Details/Trailer

<p align="center">
<img src="https://media.giphy.com/media/CMzHYb4mI7bXzbDULJ/giphy.gif" width="900" align="center">
</p>

## X Button Functionality 
<p align="center"> 
<img src="https://media.giphy.com/media/6UaL74M7EyCe3P73Dr/giphy.gif" width="900" align="center">
</p>

## Search Bar Functionality 

 <p align="center">
 <img src="https://media.giphy.com/media/nFVycfHtE8Yw3gCVh1/giphy.gif" width="900" align="center">
 </p>
 
## Error Handling 

<p align="center">
<img width="900" alt="Screen Shot 2021-12-13 at 5 05 30 PM" src="https://user-images.githubusercontent.com/86894344/145908857-7ac00218-9971-42b0-826f-edec5d6f5a4e.png">
</p>



## Architecture
  Our version of the Rancid Tomatillos project pulls all of its data from a third party API provided by our instructors. On page load, we perform a fetch call and set the state of our main class component. Once the state is set the movie-posters are loaded to the DOM with dynamically created routes using movie specific IDs. If a user clicks on a movie-poster another fetch call is made that obtains more information about a specific movie to load onto the preview. 


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

