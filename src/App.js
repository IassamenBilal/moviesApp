import React, { useEffect } from "react";
import Movies from "./components/Content/Movies";
import { CircularProgress, Container } from "@mui/material";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./actions/movies.actions";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const { loading, movies, success } = useSelector(
    (state) => state.getMoviesReducer
  );

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <Header />

      <Container style={{ minHeight: "100vh" }}>
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          success && <Movies movies={movies} />
        )}
      </Container>
      <Footer />
    </div>
  );
}
