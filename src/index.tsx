// Libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Redux
// import { createStore } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Utils
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

// Components / Styles
import App from './App';
import './index.css';

// Store Configuration and middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
