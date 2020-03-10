const cryptogenerate = require("../helper/crypto");
const { mysqldb } = require("../connection");
const { createJWTToken } = require("./../helper/jwt");

module.exports = {
  userRegister: (req, res) => {
    var { username, password, email } = req.body;
    var sql = `select username from users where username='${username}' and email='${email}' `;
    console.log(email);

    mysqldb.query(sql, (err, results) => {
      if (err) {
        return res.status(500).send({ status: "error", err });
      }
      if (results.length > 0) {
        console.log(results);
        return res.status(200).send({ status: "error", message: "username has been taken" });
      } else {
        var hashpassword = cryptogenerate(password);
        var dataUser = {
          username,
          password: hashpassword,
          email,
          status: "unverified",
          roleid: 2
          // lastlogin: new Date()
        };
        sql = `insert into users set ?`;

        mysqldb.query(sql, dataUser, (err1, res1) => {
          if (err1) {
            return res.status(500).send({
              status: "error",
              message: "server error cuy",
              err: err1
            });
          }
          return res.status(200).send({ status: "success bro" });
        });
      }
    });
  },

  userLoginn: (req, res) => {
    const { id } = req.params;
    const { email, password } = req.query;

    if (id) {
      var sql = `select * from users where id=${id}`;
      mysqldb.query(sql, (err, result) => {
        if (err) res.status(500).send({ status: "error", err });
        const token = createJWTToken({
          userid: result[0].id
        });

        return res.status(200).send({
          email: result[0].email,
          id: result[0].id,
          status: "success",
          token
        });
      });
    } else {
      var hasspasword = cryptogenerate(password);
      let sql = `select * from users where email='${email}' and password='${hasspasword}'`;

      mysqldb.query(sql, (err, result) => {
        if (err) res.status(500).send({ status: "error", err });
        if (result.length === 0) {
          return res.status(200).send({
            status: "notmatch",
            error: "email and password tidak sesuai!"
          });
        }
        const token = createJWTToken({
          userid: result[0].id
        });
        return res.send({
          email: result[0].email,
          id: result[0].id,
          status: "success",
          token
        });
      });
    }
  },

  userGetCart: (req, res) => {
    let sql = `select tr.*,p.gambar from transactions tr left join product p on tr.productId=p.id`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ getCart: result })
    })
  },

  
};
