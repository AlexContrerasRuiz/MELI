const BASE = require('../baseItem');

const FormatDesc = (res) => {
  BASE.item.description = res[0].body.plain_text;
  return BASE;
};

module.exports = FormatDesc;
