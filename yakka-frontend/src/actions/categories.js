export const getCategories = () => {
    return dispatch => {
        dispatch({type: 'LOADING_CATEGORIES'})
        fetch('/categories')
        .then(resp => resp.json())
        .then(categories => dispatch({
            type: 'CATEGORIES_LOADED', 
            payload: categories}))
    }
}