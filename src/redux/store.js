import { createStore, combineReducers } from "redux";
import reducer from "./reducer";
import resident from "./resident";
import user from "./user";
let redusers = combineReducers({
  flat: reducer,
  res: resident,
  user: user,
});
let store = createStore(
  redusers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
