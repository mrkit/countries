const e = require('express'),
      a = e(),
      r = require('path').resolve,
      m = require('morgan'),
      bp = require('body-parser'),
      conn = require('./db');

a.use([
  e.static(r(__dirname, '..')),
  m('dev'),
  bp.json(),
  bp.urlencoded({ extended: false })
]);

a.get('/', (req, res) => res.sendFile(r(__dirname, '..', 'client', 'index.html')));

a.use('/api', require('./api'));

a.use((err, req, res, next) => {
  if(err) {
    console.log(err.message);
    res.send(err.message);
  }
});

conn.x.sync({ force: true })
.then(() => a.listen(3000, console.log('made it to 3000')));