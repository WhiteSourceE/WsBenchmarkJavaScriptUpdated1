const mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/login/auth', function (req, res) {
  //   u = req.body.username;
  //   p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();
  return db.query('SELECT * FROM users WHERE name = $1 AND password = $2;', [
    req.body.username,
    req.body.password,
  ]);
});
