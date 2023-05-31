const express = require("express");
const mediacontrollers = require("../controllers/mediacontrollers");
const router = express.Router();


router.post("/post", mediacontrollers.createAll);
router.post("/getalldata", mediacontrollers.getAllDate);
module.exports = router;
