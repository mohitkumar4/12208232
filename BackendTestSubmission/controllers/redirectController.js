const { shortUrls } = require("../models/store");
const dayjs = require("dayjs");
const { log } = require("../../LoggingMiddleware/logger");

async function handleRedirectShortUrl(req, res) {
  const { shortcode } = req.params;
  const data = shortUrls[shortcode];

  if (!data) {
    await log("backend", "warn", "handler", "shrtcode not find");
    return res.status(404).json({ error: "shrt not fund" });
  }

  const now = dayjs();
  if (now.isAfter(dayjs(data.expiry))) {
    await log("backend", "warn", "handler", "shrt exp:");
    return res.status(410).json({ error: "shrtcode has exp" });
  }

  
  data.clicks.push({
    timestamp: now.toISOString(),
    referrer: req.get("Referer") || "direct",
    location: "India" 
  });

  await log("backend", "info", "handler", "redirct to org URL");

  return res.redirect(data.url);
}

module.exports = {
  handleRedirectShortUrl
};
