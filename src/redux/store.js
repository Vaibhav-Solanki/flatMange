import { createStore, combineReducers } from "redux";
import reducer from "./reducer";
import resident from "./resident";
let redusers = combineReducers({
  flat: reducer,
  res: resident,
});
let store = createStore(
  redusers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
