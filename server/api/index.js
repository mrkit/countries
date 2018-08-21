const r = require('express').Router();

r.use('/countries', require('./countries'));
r.use('/users', require('./users'));

module.exports = r;