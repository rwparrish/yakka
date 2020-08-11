export default (state = { categories: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_CATEGORIES':
            return {
                ...state, 
                loading: true
            }
        case 'CATEGORIES_LOADED':
            return {
                ...state, 
                categories: action.payload,
                loading: false
            }
        default:
            return state
    }
}