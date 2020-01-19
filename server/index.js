const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Config
const CONFIG = require('./config');

// Format Fuctions
const FormatSearch = require('./format/formatFunctions/formatSearch');
const FD = require('./format/formatFunctions/formatDesc');
const FI = require('./format/formatFunctions/formatItem');

// Midd Functions
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET METHODS
// Search
app.get('/api/items', function(req, res) {
  axios
    .get(`${CONFIG.baseURL}sites/MLA/search?q=iphone&limit=4`)
    .then(response => {
      res.send(FormatSearch(response.data));
    });
});

// Item Detail
app.get('/api/items/:id', function(req, res) {
  axios.get(`${CONFIG.baseURL}items?ids=${req.params.id}`).then(response => {
    res.send(response.data);
//     res.send(FI(response.data));
  });
});

//Item Description
app.get('/api/items/:id/description', function(req, res) {
  axios
    .get(`${CONFIG.baseURL}items?ids=${req.params.id}/description`)
    .then(response => {
      if (res.statusCode === 200) {
        res.send(FD(response.data));
      }
    });
});

//Run Server
app.listen(CONFIG.port, () =>
  console.log(`${CONFIG.message}: ${CONFIG.port} ♥`)
);
