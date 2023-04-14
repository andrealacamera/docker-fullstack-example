const r = require('express').Router();
const {test} = require('./controller')

r.get('/', test);

module.exports = r;
