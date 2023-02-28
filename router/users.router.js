import express from "express";
import { createUsers } from "../service/createUsers.js";
import bcrypt from "bcrypt";

const router = express.Router();

// // post method to create data

async function generatepassword(password) {
  const NO_OF_ROUNDS = 10;

  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);

  const hashedpassword = await bcrypt.hash(password, salt);

  console.log(salt);

  console.log(hashedpassword);
  return hashedpassword;
}

router.post("/signup", async function (request, response) {
  const { username, password } = request.body;

  const hashedpassword = await generatepassword(password);

  const result = await createUsers({
    username: username,
    password: hashedpassword,
  });

  response.send(result);
});

// // deletee method to delete data

// router.delete("/:id", async function (request, response) {
//   const { id } = request.params;

//   console.log(id);
//   const deleteMovie = await deleteMovieByID(id);

//   response.send(deleteMovie);

//   deleteMovie.deletedCount >= 1
//     ? response.send({ message: "movie deleted succesfully" })
//     : response.status(404).send({ message: "movie not found" });
// });

// router.put("/:id", async function (request, response) {
//   const { id } = request.params;
//   const data1 = request.body;
//   console.log(id);
//   const update = await updateMovieByID(id, data1);

//   response.send(update);
// });

export default router;
