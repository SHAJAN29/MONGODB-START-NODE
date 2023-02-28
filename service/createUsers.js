import { client } from "../index.js";

// export async function updateMovieByID(id, data1) {
//   return await client
//     .db("b42wd20")
//     .collection("movies")
//     .updateOne({ id: id }, { $set: data1 });
// }
// export async function deleteMovieByID(id) {
//   return await client.db("b42wd20").collection("movies").deleteOne({ id: id });
// }
export async function createUsers(data) {
  return await client.db("b42wd20").collection("users").insertOne(data);
}
// export async function getMovieByID(id) {
//   return await client.db("b42wd20").collection("movies").findOne({ id: id });
// }
// export async function getMovies() {
//   return await client.db("b42wd20").collection("movies").find({}).toArray();
// }
