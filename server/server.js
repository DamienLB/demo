const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

require ('./db');
const routes = require('./routes/studentRoutes');


const port = process.env.PORT || 3000;
app.listen(port);

app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081'],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);


console.log('API server started on: ' + port);
