const express = require('express');

const app = express();

const cors = require('cors');

const path = require('path');

const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const mainRoute = require('./routes/router');

app.use(mainRoute);

app.listen(3000);