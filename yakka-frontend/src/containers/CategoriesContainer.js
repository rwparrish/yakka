import React, { Component } from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { getCategories } from '../actions/categories'
class CategoriesContainer extends Component {

    componentDidMount() {
        this.props.getCategories()
    }

    // handleLoading = () => {
    //     // console.log(this.props.loading)
    //     if(this.props.loading) {
    //       return <div>Loading...</div>
    //     } else {
    //       return <Categories categories={this.props.categories}/>
    //     }
    //   }

    render() {
        return (
            <div>
                {/* {this.handleLoading()} */}
                <Categories categories={this.props.categories}/>
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

export default connect(mapStateToProps, {getCategories} )(CategoriesContainer)
