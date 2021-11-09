import {
  GET_MOVIES_FAIL,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from "./movies.types";
import { movies$ } from "../movies";

export const getMovies = () => async (dispatch) => {
  dispatch({ type: GET_MOVIES_REQUEST });
  await movies$
    .then((movies) => dispatch({ type: GET_MOVIES_SUCCESS, payload: movies }))
    .catch((err) => dispatch({ type: GET_MOVIES_FAIL, payload: err }));
};

export const deleteMovie = (id) => async (dispatch) => {
  dispatch({ type: DELETE_MOVIE, payload: id });
};

export const updateMovie = (id, movie) => async (dispatch) => {
  dispatch({ type: UPDATE_MOVIE, payload: { id, movie } });
};
