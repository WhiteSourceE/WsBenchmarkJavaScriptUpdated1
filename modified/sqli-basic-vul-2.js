let mysql = require('mysql');
let express = require('express');
let router = express.Router();

router.post('/login/auth', function (req, res) {
  let u = req.body.username;
  let p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  let db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();

  let q =
    "SELECT * FROM users WHERE name = '" +
    u +
    "' AND password ='" +
    req.body.password +
    "';";

  return db.query(q);
});
