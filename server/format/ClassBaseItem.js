class BaseItem {
  constructor(options = {}) {
    Object.assign(
      this,
      {
        author: {
          name: 'Alex',
          lastname: 'Contreras'
        },
        item: {
          id: '',
          title: '',
          price: {
            currency: '',
            amount: null,
            decimals: null
          },
          picture: '',
          condition: '',
          free_shipping: false,
          sold_quantity: null,
          description: ''
        }
      },
      options
    );
  }

  setId(value) {
    this.item.id = value
  }

  getAuthor() {
    return this.item
  }
}


module.exports = BaseItem;

