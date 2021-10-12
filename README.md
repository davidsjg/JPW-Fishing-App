# James Peak Wilderness Fishing App

Application displaying results of Colorado Parks and Wildlife fish survey.

Title: James Peak Wilderness Fishing App

Goal: The goal of this application is to allow the user to view the fish survey data for lakes in James Peak Wilderness in Colorado.

Technologies: .HTML, .CSS, .JS, Node, Express, MongoDB, Mongo Atlas, React, Context API, Bootstrap, Heroku

Introduction: Every so often, Colorado Parks and Wildlife conducts a fish survey across Colorado. These results are logged to a data sheet that is made available to the public. This application takes the resulting survey data and converts it into an easy-to-use web application.

Scope of Functionality: Upon arrival to the homepage, the user can select a lake and review the results, view all lakes and select one, or view a data table and select a lake.

Challenges Faced: This was the second time I used context API, so many challenges were faced. I wanted an applicatin that could share state across pages, but when a page change was made, the store was reset. Creating context APIs for each page was fine, but I realized that what I am looking for is a global state store. However, with React Router's history capabilities when changing pages, I was able to do individual API calls on each page and set state accordingly.

Conditional rendering was another challenge. When a page is reading from an array that is on the context API, it is challenging to conditionally render (or render at all) these array items.

Potential Future Plans: I'd like to have autentication and usernames/login capability. Users could then comment on each lake, save their favorites, and communicate with other users. This application is also scalable to another mountain range. Indian Peaks Wilderness would be the next one.

LIVE PAGE: https://fathomless-crag-56888.herokuapp.com/
