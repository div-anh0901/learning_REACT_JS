const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/private");
const { protect } = require("../middleware/authMidd");

router.route("/").get(protect, getPrivateData);

module.exports = router;
