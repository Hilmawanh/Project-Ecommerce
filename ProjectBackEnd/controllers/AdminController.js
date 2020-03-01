const { mysqldb } = require("../connection");
const { uploader } = require("../helper/uplouder");
const fs = require("fs");

module.exports = {
  addNewProduk: (req, res) => {
    try {
      const path = "/product/image";
      const upload = uploader(path, "Product").fields([{ name: "image" }]);

      upload(req, res, err => {
        if (err) {
          return res.status(500).json({ message: "Upload Foto Failed", err: err.message });
        }

        console.log("masuk");
        const { image } = req.files;
        console.log(image);
        const imagePath = image ? path + "/" + image[0].filename : null;
        console.log(imagePath);

        const data = JSON.parse(req.body.data);

        data.gambar = imagePath;

        var sql = `INSERT INTO product SET ?`;
        mysqldb.query(sql, data, (err, results) => {
          console.log('berhasil add')
          if (err) {
            console.log(err.message);
            console.log('gagal add')
            fs.unlinkSync("./public" + imagePath);
            return res.status(500).json({ message: "Error on the server", error: err.message });
          }

          console.log(results);
          mysqldb.query(
            `select p.*,c.category as categoryBike from product p left join category c on p.categoryid=c.id order by c.id`,
            (err, result1) => {
              if (err) res.status(500).send(err);
              mysqldb.query(`select * from category`, (err, result2) => {
                if (err) res.status(500).send(err);
                res.status(200).send({ dataProduk: result1, dataCategory: result2 });
              });
            }
          );
        });
      });
    } catch (err) {
      return res.status(500).json({ message: "There's error on the server. Please contact the administrator.", error: err.message });
    }

  },

  editProduk: (req, res) => {
    const productId = req.params.id
    let sql = `select * from product where id=${productId}`
    mysqldb.query(sql, (err, results) => {
      if (err) throw (err)

      if (results.length) {
        const path = "/product/image";
        const upload = uploader(path, "Product").fields([{ name: "image" }]);
        upload(req, res, err => {
          if (err) {
            return res.status(500).json({ message: "Upload post picture Failde", error: err.message })
          }
          const { image } = req.files;
          const imagePath = image ? path + "/" + image[0].filename : null;
          const data = JSON.parse(req.body.data);

          try {
            if (imagePath) {
              data.gambar = imagePath
            }

            sql = `UPDATE product SET ? where id=${productId}`
            mysqldb.query(sql, data, (err1, results1) => {
              if (err1) {
                if (imagePath) {
                  fs.unlinkSync("./public" + imagePath)
                }
                return res.status(500).json({ message: "There's Error on the server. Asshole", error: err1.message })
              }
              if (imagePath) {
                //===== Hapus Foto Lama =====\\
                if (results[0].gambar) {
                  fs.unlinkSync('./public' + results[0].gambar)
                }
              }

              mysqldb.query(`select p.*,c.category as categoryBike from product p left join category c on p.categoryid=c.id order by c.id`, (err, result1) => {
                if (err) res.status(500).send(err)
                mysqldb.query(`select * from category`, (err, result2) => {
                  if (err) res.status(500).send(err);
                  res.status(200).send({ dataProduk: result1, dataCategory: result2 })
                })
              })
            })

          } catch (err) {
            console.log(err.message);
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
          }
        })
      }
    })
  },

  deleteProduk: (req, res) => {
    let sql = `select * from product where id=${req.params.id}`
  },

  getProdukSepeda: (req, res) => {
    mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=1`, (err, result1) => {
      if (err) res.status(500).send(err)
      mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=2`, (err, result2) => {
        if (err) res.status(500).send(err)
        mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=3`, (err, result3) => {
          if (err) res.status(500).send(err)
          mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=4`, (err, result4) => {
            if (err) res.status(500).send(err)
            mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=5`, (err, result5) => {
              if (err) res.status(500).send(err)
              mysqldb.query(`select p.*,c.category from product p left join category c on p.categoryid=c.id order by c.id`, (err, result6) => {
                if (err) res.status(500).send(err)
                mysqldb.query(`select * from category`, (err, result7) => {
                  if (err) res.status(500).send(err)
                  mysqldb.query(`select p.* from product p left join category c on p.categoryid=c.id order by c.id`, (err, result8 => {
                    if (err) res.status(500).send(err)
                    res.status(200).send({ dataMountain: result1, dataRoadbike: result2, dataDaily: result3, dataBmx: result4, dataEbike: result5, dataProduk: result6, dataCategory: result7, dataEdit: result8 })
                  }))
                })
              })
            })
          })
        })
      })
    })
  },

  getProdukEquipment: (req, res) => {
    let sql = `dsa`;

  },


};

