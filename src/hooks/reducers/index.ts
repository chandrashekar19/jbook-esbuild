import { combineReducers } from "redux";
import cellsReducer from "./cells-reducer";
import bundleReducer from "./bundle-reducers";
const reducers = combineReducers({
  cells: cellsReducer,
  bundles: bundleReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
