import React, { Component } from 'react'
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
        this.props.handleOnSubmit(this.state.name)
        console.log(this.state.name)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Add a category
                        <input type="text" value={this.state.name} onChange={this.handleChange}/>
                        <input type="submit"/>
                    </label>
                </form>
            </div>
        )
    }
}
    
export default CategoryInput