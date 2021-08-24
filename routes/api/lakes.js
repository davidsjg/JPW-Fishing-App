const router = require("express").Router();
const lakeController = require("../../controller/lakeController");

// Matches with "/api/cities"
router.route("/").get(destinationController.findAll);
//   .post(destinationController.create)
//   .put(destinationController.update);

// Matches with "/api/cities/:id"
// router
//   .route("/:id")
//   .get(destinationController.findById)
//   .put(destinationController.update)
//   .delete(destinationController.remove);

module.exports = router;
