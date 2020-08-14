import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CategoriesContainer from './containers/CategoriesContainer';
import CategoryChoresContainer from './containers/CategoryChoresContainer';
import ChoresContainer from './containers/ChoresContainer';
import NavBar from './components/NavBar'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <NavBar/>
      <Router>
        <>
          <Route exact path='/' component={App}/>
          <Route exact path='/categories' component={CategoriesContainer}/>
          <Route exact path='/chores/new' component={ChoresContainer}/>
          <Route path='/categories/:id' component={CategoryChoresContainer}/>
        </>
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
