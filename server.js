'use strict';

const express = require('express');
const morgan = require('morgan');

const { PORT } = require('./config');

const app = express();

app.use(morgan(':method :url :res[location] :status'));

app.get('/', (req, res) => {
  res.send('hello world');
});

// ADD YOUR ENDPOINTS HERE

/** if (require.main === module) ...
 * Run this block if file is run using `npm start` or `node server.js`
 * Fixes error: "Trying to open unclosed connection" when running mocha tests
 */
if (require.main === module) {
  const server = app
    .listen(PORT, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error(err);
    });
}