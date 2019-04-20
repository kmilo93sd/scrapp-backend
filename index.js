require('dotenv').config();

const express =  require('express');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const modules = require('./src/contexts/index');
const Sequelize = require('sequelize');

const app = express();

const databaseString = 'postgres://${ proccess.env.database_user }:${ proccess.env.database_pass }@postgres:5432/${proccess.env.database_name}';

const sequelize = new Sequelize(databaseString);

app.use(helmet());
app.use(morgan('dev'));
app.use(parser.json());

app.get('/', (req, res) => {
  res.json({
    message : 'Welcome to Scrapp backend.',
    status : 'Ready!',
  });
});

app.use('', modules);

module.exports = app;