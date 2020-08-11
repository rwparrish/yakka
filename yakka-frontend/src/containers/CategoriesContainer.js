import React, { Component } from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'

class CategoriesContainer extends Component {

    handleLoading = () => {
        // console.log(this.props.loading)
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return <Categories categories={this.props.categories}/>
        }
      }

    render() {
        return (
            <div>
                {this.handleLoading()}
                {/* <Category/> */}
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

export default connect(mapStateToProps)(CategoriesContainer)
