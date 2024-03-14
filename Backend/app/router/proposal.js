const expressAsyncHandler = require("express-async-handler");
const { verifyAccessToken } = require("../http/middlewares/user.middleware");
const {
  ProposalController,
} = require("../http/controllers/proposal.controller");
const { ROLES } = require("../../utils/constants");
const { authorize } = require("../http/middlewares/permission.guard");

const router = require("express").Router();

router.get(
  "/list",
  authorize(ROLES.FREELANCER, ROLES.ADMIN),
  expressAsyncHandler(ProposalController.getListOfProposals)
);
router.post(
  "/add",
  authorize(ROLES.FREELANCER, ROLES.ADMIN),
  expressAsyncHandler(ProposalController.addNewProposal)
);
router.get(
  "/:id",
  authorize(ROLES.FREELANCER, ROLES.ADMIN),
  expressAsyncHandler(ProposalController.getProposalById)
);
router.patch(
  "/:id",
  authorize(ROLES.OWNER, ROLES.ADMIN),
  expressAsyncHandler(ProposalController.changeProposalStatus)
);

module.exports = {
  proposalRoutes: router,
};
