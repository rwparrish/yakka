import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Category } from '../components/Category';
import { getCategories, addCategory } from '../actions/categories';
import CategoryInput from '../components/CategoryInput';


class CategoriesContainer extends Component {

    
    componentDidMount() {
        this.props.getCategories()
    }

    handleSubmit = name => {
        this.props.addCategory({name: name})
    }

    render() {
        const categories = this.props.categories.map((cat, i) => <Category key={i} cat={cat}/> )
        return (
            <div>
                <CategoryInput handleOnSubmit={this.handleSubmit} />
                <div>{this.props.loading ? <h5>Loading.....</h5> : categories}</div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        loading: state.categoryReducer.loading
    }
}

export default connect(mapStateToProps, { getCategories, addCategory } )(CategoriesContainer)
