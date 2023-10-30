const express = require("express");
const sellersController = require("../controllers/sellersController");
const router = express.Router();

router.get("/", sellersController.getSellers);
router.post("/", sellersController.postSellers);

module.exports = router;