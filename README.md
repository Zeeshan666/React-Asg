# React Article Viewer

A React application to display the most viewed articles using the New York Times API. 
The project utilizes Tailwind CSS for styling and Axios for data fetching.



## Installation

1. Clone the repository:
   git clone https://github.com/your-username/react-article-viewer.git
   cd  REACT_ASG_

2. Install the dependencies:
   npm install


3. Components

  Dropdown
   A dropdown component to select the time period for fetching the most viewed articles.

  Props
   options: An array of objects representing the dropdown options.
   onSelect: A function to handle the selection of an option.
   defaultValue: The default selected value.

  ArticleList
  A component to display the list of articles.

  Props
  articles: An array of article objects to display.

  Error
  A component to display error messages.

  Props
  message: The error message to display   

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
