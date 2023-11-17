const { Router, request, response } = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/userController");

const userRoutes = Router();


userRoutes.post("/register", (request, response) => {
  registerController(request, response);
});

userRoutes.post("/login", (request, response) => {
  loginController(request, response);
});

module.exports = userRoutes;