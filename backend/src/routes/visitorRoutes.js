const express = require("express");
const  {
  logVisitor,
  getVisitorSummary,
  getVisitorTrend,
} = require("../controller/visitorController");
const apiKeyAuth = require("../middleware/apiKeyAuth");
const router = express.Router();



router.post("/visitor", logVisitor);

router.get("/visitors/summary", apiKeyAuth, getVisitorSummary);


router.get("/visitors/trend", apiKeyAuth, getVisitorTrend);

module.exports = router;