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
  const q = '';
  for (let index = 0; index < 1; index++) {
    q =
      "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
  }

  return db.query(q);
});
