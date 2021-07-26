import { createStore } from "redux";
import { reducer } from "./Reducer/TaskReducer";

// @ts-ignore
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, devtools);
export default store;