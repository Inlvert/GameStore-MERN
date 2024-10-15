const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.route("/").post(userController.createUser);

userRouter
  .route("/:userId")
  .get(userController.getUser)
  .put(userController.updateUser);

module.exports = userRouter;
