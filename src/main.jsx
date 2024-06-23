import React from 'react'; // Importing the React library to create components
import ReactDOM from 'react-dom/client'; // Importing ReactDOM to render the app into the DOM
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing global CSS styles
import { store } from './store'; // Importing the configured Redux store
import { Provider } from 'react-redux'; // Importing Provider to integrate Redux with React

// Rendering the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
);
