import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Chore } from '../components/Chore'
import { deleteChore } from '../actions/chores'
import { getCategories } from '../actions/categories'
import { Category } from '../components/Category'

class CategoryChoresContainer extends Component {

    componentDidMount() {
        this.props.getCategories()
    
    }

    componentDidUpdate(prevProps) {
        if (prevProps.categories.find(category => category.id == this.props.match.params.id).chores.length !== this.props.chores.filter(chore => chore.category.id == this.props.match.params.id).length){
            this.props.getCategories()
        }
    }

    handleClick = event => {
        this.props.deleteChore(event.target.id)
    }

    render() {
        const cat = this.props.categories.find(cat => cat.id == this.props.match.params.id)
        const catChores = cat.chores.map((chore, i) => <Chore key={i} chore={chore} handleClick={this.handleClick}/> )
        return (
            <div>
                {cat.name}
                {catChores}
            </div> )
        }
    }

    const mapStateToProps = state => {
        return { 
            categories: state.categoryReducer.categories,
            chores: state.choreReducer.chores
        }
    }

export default connect(mapStateToProps, { deleteChore, getCategories })(CategoryChoresContainer)
