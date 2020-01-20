
const FormatDesc = (BASE, res) => {

  BASE.item.description = res[0].body.plain_text;
  return BASE;
};

module.exports = FormatDesc;
