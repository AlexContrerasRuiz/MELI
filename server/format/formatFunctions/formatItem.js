const BASE = require('../baseItem');

const FormatItem = (response) => {
  const res = response[0].body;
  BASE.item.id = res.id;
  BASE.item.title = res.title;
  BASE.item.price.currency = res.currency_id;
  [BASE.item.price.amount, BASE.item.price.decimals ] = res.price.toString().split('.').map(x => parseInt(x));
  BASE.item.picture = res.pictures[3].url;
  BASE.item.condition = res.condition;
  BASE.item.free_shipping = res.shipping.free_methods[0].rule.free_shipping_flag;
  BASE.item.sold_quantity = res.sold_quantity;
  return BASE;
};

module.exports = FormatItem;
