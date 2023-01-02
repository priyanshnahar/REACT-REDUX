import todoReducers from "./reducer/reducers";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;