const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require ('./db');
const routes = require('./routes/studentRoutes');


const port = process.env.PORT || 3000;
app.listen(port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);


console.log('API server started on: ' + port);
