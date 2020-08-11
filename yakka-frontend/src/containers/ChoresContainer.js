import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChoresContainer extends Component {
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.choreReducer.chores,
        state: state.choreReducer.loading
    }
}

export default connect(mapStateToProps)(ChoresContainer)