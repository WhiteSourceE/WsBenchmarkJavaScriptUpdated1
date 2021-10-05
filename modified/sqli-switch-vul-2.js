let mysql = require('mysql');
let express = require('express');
let router = express.Router();

router.post('/login/auth', function (req, res) {
  const u = '';
  const p = '';

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

  u = req.body.username;
  p = req.body.password;

  q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";

  // return numbers between 1 and 3
  const random_number = Math.floor(Math.random() * 3 + 1);

  switch (random_number) {
    case 1:
      //prettier-ignore
      q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
      arr = [u, p];
      break;
    case 2:
      //prettier-ignore
      q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
      arr = [u, p];
      break;
    case 3:
      //prettier-ignore
      q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
      arr = [u, p];
    default:
      //prettier-ignore
      q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
      arr = [u, p];
  }

  return db.query(q);
});
