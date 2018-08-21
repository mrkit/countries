const r = require('express').Router(),
      Countries = require('../db').models.Countries,
      countrylist = require('../db').countrylist;

r.get('/', (req, res, next) => {
  Countries.findAll()
  .then(countries => res.send(countries))
  .catch(next);
});

r.post('/', (req, res ,next) => {
  const name = req.body.name.toLowerCase();
  
  if(countrylist.includes(name)){
      console.log('Found country!', name);
      Countries.create({ name })
      .then(country => {
        res.send(country);
      })
      .catch(next);
    } else {
      console.log('That isn\'t a country!');
      res.status(500).send(name);
    }
});

r.delete('/', (req, res, next) => {
  Countries.destroy({where: {}})
  .then(thing => {
    console.log('Thing', thing);
  })
  .catch(next);
});

module.exports = r;