const { shortUrls } = require("../models/store");
const { log } = require("../../LoggingMiddleware/logger");

async function handleStatsForShortUrl(req, res) {
  const { shortcode } = req.params;
  const data = shortUrls[shortcode];

  if (!data) {
    await log("backend", "warn", "handler", "Stats shrtcode not find");
    return res.status(404).json({ error: "shrt not fund" });
  }

  const stats = {
    url: data.url,
    createdAt: data.createdAt,
    expiry: data.expiry,
    totalClicks: data.clicks.length,
    clicks: data.clicks
  };

  await log("backend", "info", "controller", "shrtcode stats fetch");

  return res.json(stats);
}

module.exports = {
  handleStatsForShortUrl
};


