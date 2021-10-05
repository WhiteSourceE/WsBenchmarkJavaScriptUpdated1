let mysql = require('mysql');
let express = require('express');
let router = express.Router();

function UnsafeDbExec(db) {
  this.db = db;
  this.q = '';
  this.arr = [];
  this.inner = new Inner();
  function Inner() {}
  Inner.prototype.run = function (db, q, arr) {
    return db.query(q, arr);
  };
}

UnsafeDbExec.prototype.run = function (u, p) {
  this.q = "SELECT * FROM users WHERE name = '$1' AND password = '$2'";
  this.arr = [u, p];
  return this.inner.run(this.db, this.q, this.arr);
};

let u = '';
let p = '';

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
  return new UnsafeDbExec(db).run(u, p);
});
