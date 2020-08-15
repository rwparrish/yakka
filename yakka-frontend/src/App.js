import React, { Component } from 'react';
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer';
import ChoresContainer from './containers/ChoresContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import CategoriesContainer from './containers/CategoriesContainer';
import CategoryChoresContainer from './containers/CategoryChoresContainer';
import ChoresContainer from './containers/ChoresContainer';
import NavBar from './components/NavBar'
import { getCategories } from './actions/categories'
import { getChores, addChore } from './actions/chores'
import Home from './components/Home'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Router>
          <>
            <Route exact path='/' component={Home}/>
            <Route exact path='/categories' component={CategoriesContainer}/>
            <Route exact path='/chores/new' render={(routerProps) => <ChoreInput addChore={this.props.addChore} categories={this.props.categories} {...routerProps} /> }/>
            <Route path='/categories/:id' component={CategoryChoresContainer}/>
          </>
        </Router>
      </div>
    );
  }
}

  const mapStateToProps = state => {
    return { categories: state.categoriesReducer.categories }
  }

export default connect(mapStateToProps, { getCategories, addChore, getChores })(App)
