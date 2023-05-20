import { combineReducers } from 'redux'
import basicReducer from './basicReducer'

const rootReducer = combineReducers({
    basicInfo: basicReducer,
})
export default rootReducer
