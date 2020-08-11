import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chores from '../components/Chores'

class ChoresContainer extends Component {
    
    render() {
        return (
            <div>
                <Chores chores={this.props.chores}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chores: state.choreReducer.chores,
        loading: state.choreReducer.loading
    }
}

export default connect(mapStateToProps)(ChoresContainer)