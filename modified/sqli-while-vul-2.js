let mysql = require('mysql');
let express = require('express');
let router = express.Router();

router.post('/login/auth', function (req, res) {
  let u = req.body.username;
  let p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth

  let db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();

  let q = '';
  while (length(q) === 0) {
    q =
      "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
  }

  return db.query(q);
});
