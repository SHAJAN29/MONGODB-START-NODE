import express from "express";
import {
  getMovies,
  getMovieByID,
  createMovies,
  deleteMovieByID,
  updateMovieByID,
} from "../service/getMovies.js";
import { auth } from "./middleware/auth.js";
const router = express.Router();

router.get("/", auth, async function (request, response) {
  const movies = await getMovies();

  console.log(movies);

  response.send(movies);
});

router.get("/:id", async function (request, response) {
  console.log();

  const { id } = request.params;

  console.log(id);

  const movie = await getMovieByID(id);

  movie
    ? response.send(movie)
    : response.status(404).send({ message: "notfound" });
});

// post method to create data

router.post("/", async function (request, response) {
  const data = request.body;

  const result = await createMovies(data);

  response.send(result);
});

// deletee method to delete data

router.delete("/:id", async function (request, response) {
  const { id } = request.params;

  console.log(id);
  const deleteMovie = await deleteMovieByID(id);

  response.send(deleteMovie);

  deleteMovie.deletedCount >= 1
    ? response.send({ message: "movie deleted succesfully" })
    : response.status(404).send({ message: "movie not found" });
});

router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data1 = request.body;
  console.log(id);
  const update = await updateMovieByID(id, data1);

  response.send(update);
});

export default router;
