import { combineReducers } from "redux";

import { getMoviesReducer } from "./movies.reducer";

const reducers = combineReducers({
  getMoviesReducer,
});

export default reducers;
