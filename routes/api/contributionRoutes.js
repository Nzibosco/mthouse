const router = require("express").Router();
const contributionController = require("../../controllers/contributionController");

// Matches with "/api/contribution"
router.route("/")
  .get(contributionController.findAll)
  .post(contributionController.create);

// Matches with "/api/contribution/:id"
router
  .route("/:id")
  .get(contributionController.findOne)
  .put(contributionController.update)
  .delete(contributionController.delete);

module.exports = router;