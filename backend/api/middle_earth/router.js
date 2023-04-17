const r = require('express').Router();
const {generic, get_gondor} = require('./controller')

r.get('/', generic)
r.get('/gondor', get_gondor);

module.exports = r;
