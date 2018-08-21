const x = require('./conn'),
      S = x.Sequelize,
      b = require('bcrypt');

const Users = x.define('user', {
  name: {
    type: S.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: S.TEXT,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate(user, options){
      if(user){
        return bcrypt.genSalt(12)
        .then(salt => bcrypt.hash(user.password, salt))
        .then(hashedPW => user.password = hashedPW)
        .then(hashedPW => this.password = hashedPW)
        .catch(err => console.log(`beforeCreate error message: ${err.message}`));
      }
    }
  }
});

Users.isValidPassword = function(passwordEntered){
  return bcrypt.compare(passwordEntered, this.password)//will return true of false
  .then(isCorrectPW => {
    console.log(`Is the password correct? ${isCorrectPW}`);
    return isCorrectPW;
  })
  .catch(err => console.log(`Validation Error: ${err.message}`))
}

module.exports = Users;