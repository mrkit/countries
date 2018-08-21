const x = require('./conn'),
      Countries = require('./Countries'),
      Users = require('./Users'),
      countrylist = require('./countrylist');

module.exports = {
  x,
  countrylist,
  models: {
    Countries,
    Users
  }
}