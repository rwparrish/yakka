export default (state = { chores: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_CHORES':
            return {
                ...state, 
                loading: true
            }
        case 'CHORES_LOADED':
            return {
                ...state, 
                chores: action.payload,
                loading: false
            }
        case 'ADDING_CHORE':
            return {
                ...state, 
                loading: true
            }
        case 'CHORE_ADDED':
            return {
                ...state,
                chores: [...state.chores, action.payload],
                loading: false
            }
        default:
            return state
    }
}