const { ROLES } = require("../../../utils/constants");
const { authorize } = require("../../http/middlewares/permission.guard");
const { categoryAdminRoutes } = require("./category");
const { userAdminRoutes } = require("./user");

const router = require("express").Router();

router.use("/category", categoryAdminRoutes);
router.use("/user", userAdminRoutes);

module.exports = {
  adminRoutes: router,
};
