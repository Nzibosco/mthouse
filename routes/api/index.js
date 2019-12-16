const router = require("express").Router();
const userRoutes = require("./userRoutes");
const contributionRoutes = require("./contributionRoutes");

// user routes
router.use("/member", userRoutes);
// contributions routes
router.use("/contribution", contributionRoutes);

module.exports = router;
