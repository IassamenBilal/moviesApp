import {
  GET_MOVIES_FAIL,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  DELETE_MOVIE,
  UPDATE_MOVIE,
} from "../actions/movies.types";

export const getMoviesReducer = (
  state = { loading: false, movies: [], succes: false, message: "" },
  action
) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        loading: false,
        success: true,
        movies: action.payload,
      };

    case GET_MOVIES_FAIL:
      return {
        loading: false,
        succes: false,
        message: "Error loading movies",
      };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((m) => m.id !== action.payload),
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((m) =>
          m.id === action.payload.id ? action.payload.movie : m
        ),
      };

    default:
      return state;
  }
};
