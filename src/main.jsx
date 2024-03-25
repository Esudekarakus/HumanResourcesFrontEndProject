import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './service/redux/reduxStore/store.jsx';
// Getting a reference to the root DOM element
const rootElement = document.getElementById('root');
if (rootElement) {
  // Creating a root.
  const root = ReactDOM.createRoot(rootElement);
  
  // Rendering the App within the context of Router and Redux's Provider
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router basename='/'>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}
