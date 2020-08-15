import React, { Component } from 'react'

class ChoreInput extends Component {

    state = {
        category_id: '',
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
        const chore = {
            category_id: this.state.category_id,
            name: this.state.name,
            description: this.state.description,
            reward: this.state.reward,
        }
        this.props.addChore(chore)
        const category_id = this.state.category_id
        this.setState({
            category_id: '',
            name: '',
            description: '',
            reward: null
        })
        this.props.history.push(`/categories/${category_id}`)
    }

    // handleSelectChange = event => {
    //     this.setState ({
    //         genre_id: parseInt(event.target.options[event.target.selectedIndex].value)
    //     })
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Pick a Category:
                        <select name="category_id" value={this.state.category_id} onChange={this.handleChange} >
                            {this.props.categories.map((cat, i) => <option key={i} value={cat.id}>{cat.name}</option> )}
                        </select></label><br/>
                    <label>Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label><br/>
                    <label>Description:
                        <input type="text_area" name="description" value={this.state.description} onChange={this.handleChange}/></label><br/>
                    <label>Reward:
                        <input type="number" name="reward" value={this.state.reward} onChange={this.handleChange}/></label><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
    
export default ChoreInput