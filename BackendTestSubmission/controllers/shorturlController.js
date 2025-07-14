const { createShortUrl } = require("../services/shorturlService");
const { log } = require("../../LoggingMiddleware/logger");

async function handleCreateShortUrl(req, res) {
  const { url, validity, shortcode } = req.body;

  if (!url || typeof url !== "string") {
    await log("backend", "error", "handler", "invalid ulr inp");
    return res.status(400).json({ error: "inVlid or mssing url" });
  }

  try {
    const result = createShortUrl(url, validity, shortcode);

    
    await log("backend", "info", "controller", "shrt url creeated sucsful");

    return res.status(201).json(result);
  } catch (error) {
    const errorMessage = error.message.slice(0, 48); 
    await log("backend", "error", "handler", errorMessage);
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  handleCreateShortUrl
};
