import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import CategoryChoresContainer from './containers/CategoryChoresContainer';
import NavBar from './components/NavBar'
import { getCategories } from './actions/categories'
import { getChores, addChore } from './actions/chores'
import Home from './components/Home'
import CategoriesContainer from './containers/CategoriesContainer';
import ChoreInput from './components/ChoreInput'
class App extends Component {

  componentDidMount() {
    this.props.getCategories()
    this.props.getChores()
  }

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
    return { categories: state.categoryReducer.categories }
  }

export default connect(mapStateToProps, { getCategories, addChore, getChores })(App)
