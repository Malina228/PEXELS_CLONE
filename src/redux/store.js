import { combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import categoryReducer from "./categoryReducer";

let redusers = combineReducers({
    mainPage: mainReducer,
    categoryPage: categoryReducer
});

let store = createStore(redusers);

//window.store = store;

export default store;