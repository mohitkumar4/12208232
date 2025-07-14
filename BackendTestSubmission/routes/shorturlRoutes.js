const express = require("express");
const router = express.Router();
const { handleCreateShortUrl } = require("../controllers/shorturlController");
const { handleRedirectShortUrl } = require("../controllers/redirectController");
const { handleStatsForShortUrl } = require("../controllers/statsController");

router.post("/shorturls", handleCreateShortUrl);
router.get("/:shortcode", handleRedirectShortUrl);
router.get("/shorturls/:shortcode", handleStatsForShortUrl); 

module.exports = router;
