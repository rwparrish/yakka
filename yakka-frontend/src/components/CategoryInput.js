import React, { Component } from 'react'
import { connect } from 'react-redux'
import addCategory from '../actions/categories'

class CategoryInput extends Component {

    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const category = { name: this.state.name }
        this.props.addCategory(category)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addCategory} )(CategoryInput)