const r = require('express').Router(),
      Users = require('../db').models.Users,
      jwt = require('jsonwebtoken');

r.get('/:id', (req, res, next) => {
  
});

r.post('/signup', (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  Users.create({ name: username, password })
  .then(user => {
    return jwt.sign({ id:user.id }, 'secret', { expiresIn: '1h' });
  })
  .then(token => res.send(token));
});

r.post('/login', (req, res, next) => {
//  jwt.verify(req.token, 'secret', function(err, data){
//    console.log(data)
//  });
  const { name, password } = req.body;
  
  Users.find({ where: { name }})
  .then(user => {
    if(user){
      console.log('User found!');
      Users.isValidPassword(password)
      .then(correctPW => {
        if(correctPW){
          console.log('This should be correct', correctPW);
          res.send(user);
        } else {
          res.send('Wrong Password');
        }
      })
    } else {
      res.send('That user does not exist, you should register a new user.');
    }
  })
  .catch(next);
});

//Verify Token 
function verifyToken(req, res, next){
  const bearerHeader = req.headers.authorization;
  
  if(typeof bearerHeader !== 'undefined'){
    const bearerToken = bearerToken.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = r;