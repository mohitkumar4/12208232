const { v4: uuidv4 } = require("uuid");

function genshtcode() {
  return uuidv4().slice(0, 6); 
}

module.exports = genshtcode;
