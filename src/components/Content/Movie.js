import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useDispatch } from "react-redux";
import { updateMovie } from "../../actions/movies.actions";

export default function Movie(props) {
  const { id, title, category, likes, dislikes, image, like } = props.movie;
  const dispatch = useDispatch();

  const onToggleLike = (id) => {
    let movie = {
      id,
      title,
      category,
      image,
      like,
      likes,
      dislikes,
    };
    like
      ? (movie = { ...movie, like: false, dislikes: dislikes + 1 })
      : (movie = { ...movie, like: true, likes: likes + 1 });
    dispatch(updateMovie(id, movie));
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardHeader
        title={<Typography variant="h5">{title}</Typography>}
        subheader={category}
      />
      <CardMedia
        className="card-img"
        component="img"
        height="200"
        image={image}
        alt={title}
      />

      <CardActions>
        <div className="card-content">
          <div>
            <IconButton onClick={() => onToggleLike(id)} color="primary">
              {like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
            <IconButton
              onClick={() => props.onDelete(id, category)}
              color="error"
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
          <div className="card-actions">
            <p className="movie-likes">
              <span>{likes}</span>
              <ThumbUpAltOutlinedIcon className="like-icon" />
            </p>
            <p className="movie-dislikes">
              <span>{dislikes}</span>
              <ThumbDownAltOutlinedIcon className="like-icon" />
            </p>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
