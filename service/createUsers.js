import { client } from "../index.js";

export async function createUsers(data) {
  return await client.db("b42wd20").collection("users").insertOne(data);
}

export async function getUserByname(username) {
  return await client
    .db("b42wd20")
    .collection("users")
    .findOne({ username: username });
}
