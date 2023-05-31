
const express = require('express')
const mediacontrollers = require("../controllers/mediacontrollers");
const router = express.Router();

router.get("/", mediacontrollers.getAll);
router.post("/post",mediacontrollers.createAll)

module.exports = router;
