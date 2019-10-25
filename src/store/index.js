import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
//import reducers

const rootReducer = combineReducers({
   //list reducers
});

//an array of all the middleware in the application
//insert and remove by modifying the array
const middleware = [thunk];
const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, enhancers);