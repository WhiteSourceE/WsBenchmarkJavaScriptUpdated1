let mysql = require('mysql');
let express = require('express');
let router = express.Router();

router.post('/login/auth', function (req, res) {
  let u = '';
  let p = '';

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  let db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  u = req.body.username;
  p = req.body.password;

  db.connect();
  let q = '';
  if (3 > 1) {
    q =
      "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
  } else {
    q =
      "SELECT * FROM users WHERE name = '" +
      'user' +
      "' AND password ='" +
      'password' +
      "';";
  }

  return db.query(q);
});
