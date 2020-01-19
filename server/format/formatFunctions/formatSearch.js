const BASE = require('../baseSearch');

const FormatSearch = response => {
  response.results.map(item => {
    let tempItem = {
      price: {
        currency: '',
        amount: null,
        decimals: null
      }
    };
    tempItem.id = item.id;
    tempItem.price.currency = item.currency_id;
    [tempItem.price.amount, tempItem.price.decimals] = item.price
      .toString()
      .split('.')
      .map(x => parseInt(x));
    tempItem.title = item.title;
    tempItem.picture = item.thumbnail;
    tempItem.condition = item.condition;
    tempItem.free_shipping = item.shipping.free_shipping;
    BASE.items.push(tempItem);
  });

  let categories = [];

  response.filters[0].values[0].path_from_root.map(cat => {
    BASE.categories.push(cat);
  });

  return BASE;
};

module.exports = FormatSearch;
