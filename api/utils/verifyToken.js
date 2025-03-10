// @ts-nocheck
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    if (!(req.user.id === req.params.id || req.user.isAdmin)) {
      return next(createError(403, "You are not authorized!"));
    }
    next();
  });
}

export const verifyTokenAdmin = (req, res, next) => {
  console.log(JSON.parse(JSON.stringify(req.cookies.access_token)));
  const token = req.cookies.access_token;
  
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    if (!req.user.isAdmin) {
      console.log(req.user.isAdmin)
      return next(createError(403, "You are no admin!"));
    }
    next();
  });
}

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {});
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {});
};