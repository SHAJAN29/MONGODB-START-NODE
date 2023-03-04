import express from "express";
import { createUsers, getUserByname } from "../service/createUsers.js";
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

  const userFromDB = await getUserByname(username);

  console.log(userFromDB);

  if (userFromDB) {
    response.status(400).send({ error: "use another username" });
  } else if (password.length < 8) {
    response.status(400).send({ error: "password must be under 8charsw" });
  } else {
    const hashedpassword = await generatepassword(password);

    const result = await createUsers({
      username: username,
      password: hashedpassword,
    });

    response.send(result);
  }
});

router.post("/login", async function (request, response) {
  const { username, password } = request.body;

  const userFromDB = await getUserByname(username);

  console.log(userFromDB);

  if (userFromDB === null) {
    response.status(400).send({ message: "invalid credintials" });
  } else {
    const storedPasseord = userFromDB.password;

    const isPasswordCheck = await bcrypt.compare(password, storedPasseord);

    console.log(isPasswordCheck);

    if (isPasswordCheck) {
      response.send({ message: "login sucessfull" });
    } else response.status(400).send({ message: "invalid credintials" });
  }
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
