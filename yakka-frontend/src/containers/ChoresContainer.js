import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChoreInput from '../components/ChoreInput';
import { getCategories } from '../actions/categories';
import { getChores, addChore } from '../actions/chores'
import { Chore } from '../components/Chore'

class ChoresContainer extends Component {

    componentDidMount() {
        this.props.getCategories()
        this.props.getChores()
    }

    handleSubmit = chore => {
        this.props.addChore(chore)
    }

    
    
    render() {
        return (
            <div>
                <ChoreInput categories={this.props.categories} handleOnSubmit={this.handleSubmit}/>
            </div>)
    }
}


const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        chores: state.choreReducer.chores,
        loading: state.choreReducer.loading
    }
}

export default connect(mapStateToProps, { getCategories, getChores, addChore })(ChoresContainer)