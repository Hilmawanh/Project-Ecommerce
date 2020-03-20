const cryptogenerate = require("../helper/crypto");
const { mysqldb } = require("../connection");
const { createJWTToken } = require("./../helper/jwt");
const { uploader } = require('../helper/uplouder')
const fs = require("fs");

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
    const { username, password } = req.query;
    if (id) {
      var sql = `select * from users where id=${id}`;
      mysqldb.query(sql, (err, result) => {
        if (err) res.status(500).send({ status: "error", err });
        const token = createJWTToken({
          userid: result[0].id
        });
        console.log(result)
        return res.status(200).send({
          username: result[0].username,
          roleid: result[0].roleid,
          id: result[0].id,
          status: "success",
          token
        });
      });
    } else {
      var hasspasword = cryptogenerate(password);
      let sql = `select * from users where username='${username}' and password='${hasspasword}'`;

      mysqldb.query(sql, (err, result) => {
        if (err) res.status(500).send({ status: "error", err });
        if (result.length === 0) {
          return res.status(200).send({
            status: "notmatch",
            error: "username and password tidak sesuai!"
          });
        }
        const token = createJWTToken({
          userid: result[0].id
        });
        return res.send({
          username: result[0].username,
          roleid: result[0].roleid,
          id: result[0].id,
          status: "success",
          token
        });
      });
    }
  },

  userGetCart: (req, res) => {
    const UserIdRedux = req.params.id
    let sql = `select tr.*, p.produk, p.gambar,p.ukuranproduk from transactions tr left join product p on tr.productid=p.id where tr.userid=${UserIdRedux}`
    mysqldb.query(sql, (err, result) => {
      if (err) {
        console.log('error get data cart')
        return res.status(500).send(err)

      }
      console.log('berhasil');

      res.status(200).send({ getCart: result })
    })
  },

  userTransaction: (req, res) => {
    var data = req.body.getTocart
    let sql = `INSERT INTO transactions SET ?`
    console.log(data)
    mysqldb.query(sql, data, (err, result1) => {
      if (err) {
        console.log('error')
        return res.status(500).send(err)
      }
      let sql = `select * from transactions`
      mysqldb.query(sql, (err, result2) => {
        if (err) {
          console.log('error')
          res.status(500).send(err)
        }
        console.log('berhasil')

        res.status(500).send({ dataCart: result2 })
      })
    })
  },

  deleteCart: (req, res) => {
    let sql = `select * from transactions where id=${req.params.id}`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      if (result.length) {
        let sql = `delete from transactions where id=${req.params.id}`
        console.log(result)
        mysqldb.query(sql, (err, result2) => {
          if (err) res.status(500).send(err)
          let sql = `select tr.*, p.produk, p.gambar,p.ukuranproduk from transactions tr left join product p on tr.productid=p.id where tr.userid=${req.params.userId}`
          mysqldb.query(sql, (err, result3 => {
            if (err) res.status(500).send(err)
            res.status(200).send({ dataCartDelete: result3 })
          }))
        })
      }
    })
  },

  getCheckout: (req, res) => {
    UserIdRedux = req.params.id
    let sql = `select tr.*, p.produk,p.ukuranproduk,p.harga from transactions tr left join product p on tr.productid=p.id where tr.userid=${UserIdRedux} and tr.status='checkout'`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ dataCheckOut: result })
    })
  }
  ,


  userCheckout: (req, res) => {
    // const {nama,email,alamat,nomor,foto,}
  },


};
