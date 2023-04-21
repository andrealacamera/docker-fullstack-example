const r = require('express').Router();
const {generic, get_gondor, new_gondor} = require('./controller')

r.get('/', generic)
r.get('/gondor', get_gondor);
r.post('/new_gondor', new_gondor);
module.exports = r;
