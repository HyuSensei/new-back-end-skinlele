const jwt = require("jsonwebtoken");
const db = require("../models/index");
require("dotenv").config();

const verifyToken = (token) => {
  let decoded = null;
  let key = process.env.JWT_SECRET;
  let data = null;
  try {
    decoded = jwt.verify(token, key);
    data = decoded;
  } catch (error) {
    console.log(error);
  }
  return data;
};

const middlewareCustomer = async (req, res, next) => {
  try {
    if (req.cookies.jwt) {
      let token = req.cookies.jwt;
      let data_token = verifyToken(token);
      let user = await db.User.findOne({
        where: {
          id: data_token.id,
          username: data_token.username,
          email: data_token.email,
        },
      });
      if (user) {
        next();
      } else {
        return res.status(200).json({
          detail: "Vui lòng hãy đăng nhập !",
        });
      }
    } else {
      return res.status(200).json({
        detail: "Vui lòng hãy đăng nhập !",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const middlewareAdmin = async (req, res, next) => {
  try {
    if (req.cookies.jwt_admin) {
      let token = req.cookies.jwt_admin;
      let data_token = verifyToken(token);
      let user = await db.User.findOne({
        where: {
          id: data_token.id,
          RoleId: data_token.role_id,
        },
      });
      if (user) {
        next();
      } else {
        return res.status(200).json({
          detail: "Vui lòng hãy đăng nhập !",
        });
      }
    } else {
      return res.status(200).json({
        detail: "Vui lòng hãy đăng nhập !",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { middlewareCustomer, middlewareAdmin };
