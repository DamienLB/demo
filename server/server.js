const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes/studentRoutes');
require ('./db');

const port = process.env.PORT || 8080;
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);