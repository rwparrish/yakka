import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChoreInput from '../components/CategoryInput';
import { getCategories } from '../actions/categories';
import { getChores } from '../actions/chores'

class ChoresContainer extends Component {

    componentDidMount() {
        this.props.getCategories()
        this.props.getChores()
    }

    handleSubmit = name => {
        this.props.addCategory({name: name})
    }
    
    render() {
        return (
            <div>
                <ChoreInput handleOnSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        chores: state.choreReducer.chores,
        loading: state.choreReducer.loading
    }
}

export default connect(mapStateToProps, { getCategories, getChores })(ChoresContainer)