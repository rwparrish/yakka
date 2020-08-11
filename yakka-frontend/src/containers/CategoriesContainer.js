import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoriesContainer extends Component {

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.categoryReducer.categories,
        loading: state.categoryReducer.loading
    }
}

export default connect(mapStateToProps)(CategoriesContainer)
