const BASE = require('../baseSearch');

const FormatSearch = response => {
  // Se clona el objeto base sin ser puntero.
  let toFormat = JSON.parse(JSON.stringify(BASE));

  console.log('====================================');
  console.log();
  console.log('====================================');

  if (response.results.length === 0) {
    toFormat.items = [];
    return toFormat;
  }

  // Se construye el objeto item
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
    tempItem.address = item.address.state_name;
    tempItem.category_id = item.category_id;

    // Se pushea a los items del objeto enviar.
    toFormat.items.push(tempItem);
  });

  let categories = [];

  // Se comprueba si existen categorias y se pushean

  if (response.filters.length !== 0) {
    response.filters[0].values[0].path_from_root.map(cat => {
      toFormat.categories.push(cat);
    });
  } else {
    response.available_filters[0].values.map((cat, i) => {
      if (i > 3) {
        return;
      }
      toFormat.categories.push(cat);
    });
  }

  // Se envia el objeto formateado.
  return toFormat;
};

module.exports = FormatSearch;
