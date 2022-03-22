import {createStore,combineReducers} from "redux"
import userinfo from"./reducers"
const allReducer=combineReducers({
    userinfo
})
export default createStore(allReducer)