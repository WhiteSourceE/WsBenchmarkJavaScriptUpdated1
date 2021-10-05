let mysql = require('mysql');
let express = require('express');
let router = express.Router();

let db = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db',
});

db.connect();

function run1(db, q, arr) {
  return run2(db, q, arr);
}

function run2(db, q, arr) {
  return run3(db, q, arr);
}

function run3(db, q, arr) {
  return run4(db, q, arr);
}

function run4(db, q, arr) {
  return run5(db, q, arr);
}

function run5(db, q, arr) {
  return run6(db, q, arr);
}

function run6(db, q, arr) {
  //return db.query(db, q, arr);
  return db.query(q, arr);
}

router.post('/login/auth', function (req, res) {
  let u = req.body.username;
  let p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  let q =
    "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
  let arr = [];
  return run1(db, q, arr);
});
