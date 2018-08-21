const S = require('sequelize'),
      x = new S('postgres://localhost/countries3', {logging: false, operatorsAliases: false});

module.exports = x;
