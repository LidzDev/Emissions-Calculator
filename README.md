# Co2 Emissions Calculator

## Summary
A Co2 emmisions calculator that is capable of displaying the total Co2 output of a companies employee commutes.

## Description
We've been approached by an environmental sustainability consulting firm with a mission to help businesses minimise their carbon footprint. The challenge is to create a user-friendly application that computes a company's carbon emissions, primarily based on employee travel. This project will not only assist businesses in understanding their environmental impact but also encourage sustainable choices in travel and help protect the planet.

## Dependencies
- Node JS v 20
- MongoDB 
- 

##  Installation instructions in short
run the following in a terminal
```
git clone git@github.com:LidzDev/Emissions-Calculator.git
cd Emissions-Calculator
cd server
npm i
npm run server:dev
npm run seed
cd ../client
npm i
npm run dev
```

## Installation Instructions long form
To run the web app, please follow these steps:

1.  Clone the [github repository](https://github.com/LidzDev/Emissions-Calculator)
    - On GitHub.com navigate to the main page of the repository;
    - Above the list of files, click <>Code;
    - Copy the URL of the repository;
    - Open Terminal;
    - Change the current working directory to the location where you want the cloned directory;
    - Type `git clone`, and then paste the URL you copied earlier, and hit enter.
2.  Set up the server:
    - Navigate to the server directory on the terminal;
    - Install dependencies `npm i`
3.  Run the server in development mode:
     `npm run server:dev`
4.  Seed the database:
    `npm run seed`
5.  Set up the client:
    - Navigate to the client directory.
    - Install dependencies: `npm install react-leaflet`
    - run `npm i`
6.   Run the client in development mode:
     `npm run dev`
     
## How to use it

Launch the [web app](http://localhost:5173/)

Input employee commute data, including:

- Employee name
- Mode of transport
- Distance traveled (in kilometers)
- Frequency (how many times a week the journey is completed)

The app will calculate and display a running total of Co2 emissions based on the user's input.

To view the results, select the 'Results' section from the navigation bar. You can:

- See a list of user submissions.
- View employees Co2 emissions in relation to the whole company in the form of a pie chart.
- View employees starting point of their commute on a map

### Credits 

- [Claire Martin] (https://github.com/cemmartin)
- [Darren Lackie] (https://github.com/DarrenLackie)
- [Lydia Cordell] (https://github.com/LidzDev)
- [Andrew Brown] (https://github.com/andy-brown87)
