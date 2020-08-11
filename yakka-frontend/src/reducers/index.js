import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import choreReducer from './choreReducer'

const rootReducer = combineReducers({
    categoryReducer,
    choreReducer
})