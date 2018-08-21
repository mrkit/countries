const x = require('./conn'),
      S = x.Sequelize;

const Countries = x.define('country', {
  name: {
    type: S.STRING,
    unique: true,
    allowNul: false
  }
}, {
  hooks: {
    beforeCreate(country, options){
      country.name = rename(country.name);
    }
  }
});

function rename(name){
  let newName = name.split(' ');
  const nonCaps = ['of', 'an', 'a', 'and', 'the'];
  
  let finalName = newName.map((name, i) => {
    if(!nonCaps.includes(name) || i === 0){
      return name[0].toUpperCase() + name.slice(1);
    } else {
      return name;
    }
  })
  return finalName.join(' ');
}

module.exports = Countries;