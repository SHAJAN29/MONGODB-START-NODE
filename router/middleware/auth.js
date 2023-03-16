import jwt from "jsonwebtoken";

export const auth = (response, request, next) => {
  //   try {
  const token = request.header("x-auth-token");

  console.log(token);

  //     jwt.verify(token, process.env.SECRETKEY);
  //     next();
  //   } catch (err) {
  //     response.status(401).send({ message: err.message });
};
