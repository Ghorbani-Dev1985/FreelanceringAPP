const expressAsyncHandler = require("express-async-handler");
const { ProjectController } = require("../http/controllers/project.controller");
const { ROLES } = require("../../utils/constants");
const { authorize } = require("../http/middlewares/permission.guard");

const router = require("express").Router();

router.get("/list", expressAsyncHandler(ProjectController.getListOfProjects));
router.get(
  "/owner-projects",
  authorize(ROLES.ADMIN, ROLES.OWNER),
  expressAsyncHandler(ProjectController.getListOfOwnerProjects)
);
router.post(
  "/add",
  authorize(ROLES.ADMIN, ROLES.OWNER),
  expressAsyncHandler(ProjectController.addNewProject)
);
router.get(
  "/:id",
  authorize(ROLES.ADMIN, ROLES.OWNER),
  expressAsyncHandler(ProjectController.getProjectById)
);
router.patch(
  "/update/:id",
  authorize(ROLES.ADMIN, ROLES.OWNER),
  expressAsyncHandler(ProjectController.updateProject)
);
router.patch(
  "/:id",
  authorize(ROLES.ADMIN, ROLES.OWNER),
  expressAsyncHandler(ProjectController.changeProjectStatus)
);
router.delete(
  "/:id",
  authorize(ROLES.ADMIN, ROLES.OWNER),
  expressAsyncHandler(ProjectController.deleteProject)
);

module.exports = {
  projectRoutes: router,
};
