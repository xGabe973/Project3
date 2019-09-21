const router = require("express").Router();
const userRoutes = require("./users");

//Book Routes
router.use("/users", userRoutes);

module.exports = router;