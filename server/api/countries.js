const r = require('express').Router(),
      Countries = require('../db').models.Countries,
      countrylist = require('../db').countrylist;

r.get('/', (req, res, next) => {
  Countries.findAll()
  .then(countries => res.send(countries))
  .catch(next);
});

r.post('/', (req, res ,next) => {
  let name = req.body.name.toLowerCase();
  
  if(countrylist.includes(name)){
      console.log('Found country!', name);
    
    console.log('Name before', name);
    name =  altNameFinder(name) || name; 
    console.log('Name after', name);
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


//Game Logic
function altNameFinder(name){
  //Put this inside of score adder
  // Take first index value as the display country
  const countries = [['USA', 'usa', 'united states of america', 'united states'], 
                        ['Bahamas', 'bahamas', 'the bahamas'],['St. Lucia', 'st. lucia', 'st lucia', 'saint lucia'], 
                        ['St. Kitts and Nevis', 'st kitts and nevis', 'st. kitts and nevis', 'saint kitts and nevis'],
                        ['St. Vincent and the Grenadines', 'st vincent and the grenadines', 'st. vincent and the grenadines', 'saint vincent and the grenadines'],
                        ['Cape Verde', 'cape verde', 'cabo verde'],
                        ['Central African Republic', 'central african republic', 'car'],
                        ['Republic of Congo', 'republic of congo', 'congo'],
                        ['Ivory Coast', 'republic of congo', 'congo'],
                        ['Gambia', 'gambia', 'the gambia'],
                        ['Republic of Ireland', 'ireland', 'republic of ireland'],
                        ['United Kingdom', 'united kingdom', 'uk'],
                        ['Vatican City', 'vatican city', 'vatican'],
                        ['Czech Republic', 'czech republic', 'czechia'],
                        ['Republic of Macedonia', 'macedonia', 'former yugoslav republic of macedonia', 'republic of macedonia'],
                        ['United Arab Emirates', 'united arab emirates', 'uae'],
                        ['North Korea', 'north korea', 'democratic people\'s republic of korea'],
                        ['South Korea', 'south korea', 'republic of korea'],
                        ['Maldives', 'maldives', 'maldive islands'],
                        ['Myanmar', 'myanmar', 'burma', 'union of myanmar'],
                        ['Philippines', 'philippines', 'the philippines'],
                        ['Burnei', 'brunei', 'brunei darussalam'],
                        ['East Timor', 'east timor', 'timor leste'],
                        ['Palau', 'palau', 'belau'],
                        ['Federated States of Micronesia', 'federated states of micronesia', 'micronesia'],
                        ['Tonga', 'tonga', 'friendly islands'],
                        ['Marshall Islands', 'marshall islands', 'the marshalls'],
                        ['Solomon Islands', 'solomon islands', 'the solomons']
                       ];
  
  for(let i = 0; i < countries.length; i++){
    for(let j = 1; j < countries[i].length; j++){
      if(name === countries[i][j]){
        return countries[i][0];
      }
    }
  }
  return false;
}


module.exports = r;