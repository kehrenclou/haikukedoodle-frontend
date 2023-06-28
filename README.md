# About the Project
This is the front end for fun to create haikus and song chords using openai's text-davinici-003.
Currently have the markup for the front end is done, however to connect with openai's api, one must secure the api key through the back end which is currently in process.

## Features
Guest User and Registered User
Registered Users will be able to bookmark and delete their haikus.
Guest Users will be able to create a limited number of haikus.
All Users will be able to download and like the haikus.

# local deployment:
- front-end: npm run start (deploys: http://localhost:3000)

## Technologies Used
- Javascript
- Node.js
- Create-React-App

## Libraries Used ...so far
- react-router-dom
- react-hook-form
- yup @hookform/resolvers
- @mui/icons-material
- framer-motion
- react-loading-icons
- openai (will be implemented with the backend)
- react-loading-icons
- ulid

## Future 
- Set up the backend for connection to openai
- Deploy on Google Cloud
- Implement tone.js and functionality to play the songs back