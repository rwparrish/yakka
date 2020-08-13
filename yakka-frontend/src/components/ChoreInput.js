import React, { Component } from 'react'

class CategoryInput extends Component {

    state = {
        catergory_id: null,
        name: '',
        description: '',
        reward: null,
        completed: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleOnSubmit(this.state.name)
        console.log(this.state.name)
        this.setState({
            catergory_id: null,
            name: '',
            description: '',
            reward: null,
            completed: false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name="category_id" value={this.state.catergory_id}>
                        {this.props.categories.map((cat, i) => <option key={i} value={category.id}>{category.name}</option> )}
                    </select>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text_area" name="descripton" value={this.state.description} onChange={this.handleChange}/>
                    <input type="number" name="reward" value={this.state.reward} onChange={this.handleChange}/>
                    <input type="checkbox" name="completed" value={this.state.completed} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
    
   
           

export default CategoryInput