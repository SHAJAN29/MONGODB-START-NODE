import { client } from "../index.js";

// export async function updateMovieByID(id, data1) {
//   return await client
//     .db("b42wd20")
//     .collection("movies")
//     .updateOne({ id: id }, { $set: data1 });
// }

export async function createMovieList(data) {
  return await client.db("BookMyShowApp").collection("Movies").insertMany(data);
}
export async function getMovieDetailsByID(id) {
  return await client
    .db("BookMyShowApp")
    .collection("Movies")
    .findOne({ id: id });
}
export async function getMoviesLists() {
  return await client
    .db("BookMyShowApp")
    .collection("Movies")
    .find({})
    .toArray();
}
