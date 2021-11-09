import React, { useState } from "react";
import { Grid } from "@mui/material";
import Movie from "./Movie";
import Filters from "./Filters";
import MoviesPagiantion from "./Pagination";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../actions/movies.actions";

export default function Movies({ movies, setMovies }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([
    ...new Set(movies.map((m) => m.category)),
  ]);

  const [moviesPerPage, setmoviesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const indexLastMovie = currentPage * moviesPerPage;
  const indexFirstMovie = indexLastMovie - moviesPerPage;

  const filterMovies = movies.filter((m) =>
    selectedCategories.includes(m.category)
  );
  const currentMovies =
    filterMovies.length !== 0
      ? filterMovies.slice(indexFirstMovie, indexLastMovie)
      : movies.slice(indexFirstMovie, indexLastMovie);

  const onDelete = (id, category) => {
    dispatch(deleteMovie(id));
    const UpdateMovies = movies.filter((m) => m.id !== id);
    setCategories([...new Set(UpdateMovies.map((m) => m.category))]);
    setSelectedCategories(selectedCategories.filter((s) => s !== category));
  };

  return (
    <div>
      <Filters
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        categories={categories}
        setCategories={setCategories}
        setCurrentPage={setCurrentPage}
      />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{ marginTop: "10px" }}
      >
        {currentMovies.map((m) => (
          <Grid item xs={12} md={4} key={m.id}>
            <Movie movie={m} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
      <div className="pagination">
        <MoviesPagiantion
          pages={
            filterMovies.length !== 0
              ? Math.ceil(filterMovies.length / moviesPerPage)
              : Math.ceil(movies.length / moviesPerPage)
          }
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setmoviesPerPage={setmoviesPerPage}
        />
      </div>
    </div>
  );
}
