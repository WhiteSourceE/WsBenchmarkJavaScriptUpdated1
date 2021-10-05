let mysql = require('mysql');
let express = require('express');
let router = express.Router();

router.post('/login/auth', function (req, res) {
  let u = req.body.username;
  let p = req.body.password;
  let q = '';

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  let db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();

  q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
  let arr = [];
  while (arr.length == 0) {
    q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
    arr = [u, p];
  }
  return db.query(q, arr);
});
