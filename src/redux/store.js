import { createStore, combineReducers } from "redux";
import reducer from "./reducer";
let redusers = combineReducers({
  flat: reducer,
});
let store = createStore(
  redusers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
