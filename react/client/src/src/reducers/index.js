import {combineReducers} from 'redux'
import menu from './menu'
import projects from './projects'
import userInfo from './userInfo'

const rootReducer = combineReducers({
    menu,
    projects,
    userInfo
});
export default rootReducer
