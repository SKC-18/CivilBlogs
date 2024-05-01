import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const{id}= jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(id).select("-password");
    } catch (error) {
      const err = new Error("Not authorized , Token Failed !!");
      err.statusCode = 401;
      next(err);
    }
  } else {
    let error = new Error ("Not Authorized, No Token")
    error.statusCode=401
    next(error)
  }

};
