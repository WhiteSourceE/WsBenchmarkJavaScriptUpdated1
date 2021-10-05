const mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/login/auth', function (req, res) {
  const u = req.body.username;
  const p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();
  const q = '';
  const arr = [];
  if (1 > 3) {
    q =
      "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';"; //this would cause an error, since const cannot be reasigned
  } else {
    q = 'SELECT * FROM users WHERE name = $1 AND password = $2;'; //this would cause an error, since const cannot be reasigned
    arr = [u, p];
  }

  return db.query(q, arr);
});
