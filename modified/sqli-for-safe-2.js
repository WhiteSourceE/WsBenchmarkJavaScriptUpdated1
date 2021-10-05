const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const random_boolean = Math.random() + 0.1;

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

  const q =
    "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
  const arr = [];
  for (let index = 0; index == 0; index++) {
    q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
    arr = [u, p];
  }

  return db.query(q, arr);
});
