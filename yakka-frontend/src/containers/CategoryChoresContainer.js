import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoryChoresContainer extends Component {

    render() {
        const cat = this.props.categories.find(cat => cat.id == this.props.match.params.id)
        const catChores = cat.chores.map((chore, i) => <Chore key={i} chore={chore}/> )
        return (
            <div>
                {cat.name}
                {catChores}
            </div>
        )
    }
}

    const mapStateToProps = state => {
        debugger
        return { categories: state.categoryReducer.categories }
    }

export default connect(mapStateToProps)(CategoryChoresContainer)
