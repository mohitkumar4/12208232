const dayjs = require("dayjs");
const generateShortcode = require("../utils/generateCode");
const { shortUrls } = require("../models/store");

function createShortUrl(url, validity = 30, customCode = null) {
  const now = dayjs();
  const expiry = now.add(validity, "minute").toISOString();

  let code = customCode || generateShortcode();

  if (shortUrls[code]) {
    throw new Error("Shortcode already exists");
  }

  shortUrls[code] = {
    url,
    createdAt: now.toISOString(),
    expiry,
    clicks: []
  };

  return {
    shortLink: `http://localhost:3000/${code}`,
    expiry
  };
}

module.exports = {
  createShortUrl
};
