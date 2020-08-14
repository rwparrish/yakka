import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Chore } from '../components/Chore'
import { deleteChore } from '../actions/chores'

class CategoryChoresContainer extends Component {

    handleClick = event => {
        this.props.deleteChore(event.target.id)
    }

    render() {
        const cat = this.props.categories.find(cat => cat.id == this.props.match.params.id)
        const catChores = cat.chores.map((chore, i) => <Chore key={i} chore={chore} handleClick={this.handleClick}/> )
        if (catChores) {
        return (
            <div>
                {cat.name}
                {catChores}
            </div> )
        } else { return <div>Loading...</div>
    }
}
}

    const mapStateToProps = state => {
        return { categories: state.categoryReducer.categories }
    }

export default connect(mapStateToProps, { deleteChore })(CategoryChoresContainer)
