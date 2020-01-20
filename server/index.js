const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Config
const CONFIG = require('./config');

// Format Fuctions
const FormatSearch = require('./format/formatFunctions/formatSearch');
const FormatItem = require('./format/formatFunctions/formatItem');
const FormatDesc = require('./format/formatFunctions/formatDesc');
const BASE = require('./format/baseItem');

// Midd Functions
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET METHODS
// Search
app.get('/api/search/', function(req, res) {
  console.log('====================================');
  console.log(req.query);
  console.log('====================================');
  axios
    .get(`${CONFIG.baseURL}sites/MLA/search?q=${req.query.query}&limit=4`)
    .then(response => {
      // Formatea y envia la respuesta
      res.send(FormatSearch(response.data));
    });
});

// Item Detail
app.get('/api/items/:id', async function(req, res) {
  // Se clona el objeto base sin ser puntero.
  let toFormat = JSON.parse(JSON.stringify(BASE));

  try {
    // Se obtiene el item y se formatea el objeto
    await axios
      .get(`${CONFIG.baseURL}items?ids=${req.params.id}`)
      .then(response => {
        if (res.statusCode === 200) {
          FormatItem(toFormat, response.data);
        }
      });

    // Se espèra el item y se obtiene la descripcion y se añade al objeto.
    await axios
      .get(`${CONFIG.baseURL}items?ids=${req.params.id}/description`)
      .then(response => {
        if (res.statusCode === 200) {
          FormatDesc(toFormat, response.data);
        }
      });
  } catch (error) {}

  // Se espera la finalizacion de las llamadas y formateo y se envia.
  res.send(toFormat);
});

app.get('/api/hi', async function(req, res) {
  res.send({ sms: 'hi' });
});

//Run Server
app.listen(CONFIG.port, () =>
  console.log(`${CONFIG.message}: ${CONFIG.port} ♥`)
);
