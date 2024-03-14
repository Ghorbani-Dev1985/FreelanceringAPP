const expressAsyncHandler = require("express-async-handler");
const {
  UserController,
} = require("../../http/controllers/admin/user.controller");

const router = require("express").Router();

router.get("/list", expressAsyncHandler(UserController.getAllUsers));
router.patch("/verify/:userId", expressAsyncHandler(UserController.verifyUser));
router.get("/profile/:userId", expressAsyncHandler(UserController.userProfile));

module.exports = {
  userAdminRoutes: router,
};
