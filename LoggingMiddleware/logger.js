

const axios = require('axios');

let AUTH_TOKEN = ""; 


function setAuthToken(token) {
    AUTH_TOKEN = token;
}

/**
 * Logs a msg to the affordMedicaal log srver.
 * @param {string} stack - "bckend"
 * @param {string} level - "debug", "info", "warn", "error"
 * @param {string} pkg - pckge name like "cntroller", "db", "handler", etc.
 * @param {string} message - des log msg
 */
async function log(stack, level, pkg, message) {
    try {
        const response = await axios.post(
            "http://20.244.56.144/evaluation-service/logs",
            {
                stack: stack.toLowerCase(),
                level: level.toLowerCase(),
                package: pkg.toLowerCase(),
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error("Failed to log:", error.response?.data || error.message);
    }
}

module.exports = {
    log,
    setAuthToken
};
