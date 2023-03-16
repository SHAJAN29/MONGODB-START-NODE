import express from "express";
import { createMovieList, getMoviesLists } from "../service/getBookMyShow.js";

import { auth } from "./middleware/auth.js";
const router = express.Router();

router.get("/", async function (request, response) {
  const movies = await getMoviesLists();

  console.log(movies);

  response.send(movies);
});

router.get("/:id", async function (request, response) {
  console.log();

  const { id } = request.params;

  console.log(id);

  const movie = await getMovieDetailsByID(id);

  movie
    ? response.send(movie)
    : response.status(404).send({ message: "notfound" });
});

// post method to create data

router.post("/", async function (request, response) {
  const data = request.body;

  const result = await createMovieList(data);

  response.send(result);
});

// deletee method to delete data

// router.put("/:id", async function (request, response) {
//   const { id } = request.params;
//   const data1 = request.body;
//   console.log(id);
//   const update = await updateMovieByID(id, data1);

//   response.send(update);
// });

export default router;
