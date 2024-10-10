const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.route("/").post(userController.createUser);

module.exports = userRouter;
