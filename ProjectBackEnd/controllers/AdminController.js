const { mysqldb } = require("../connection");
const { uploader } = require("../helper/uplouder");
const fs = require("fs");

module.exports = {
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
                  mysqldb.query(`select p.* from product p left join category c on p.categoryid=c.id order by c.id`, (err, result8) => {
                    if (err) res.status(500).send(err)
                    mysqldb.query(`select * from product`, (err, result9 => {
                      if (err) res.status(500).send(err)
                      // console.log(result2)
                      res.status(200).send({ dataMountain: result1, dataRoadbike: result2, dataDaily: result3, dataBmx: result4, dataEbike: result5, dataProduk: result6, dataCategory: result7, dataEdit: result8, dataCoba: result9 })
                    }))
                  })
                })
              })
            })
          })
        })
      })
    })
  },

  getProdukRoadbikeCategory: (req, res) => {
    mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=8`, (err, result1) => {
      if (err) res.status(500).send(err)
      mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=9`, (err, result2) => {
        if (err) res.status(500).send(err)
        res.status(200).send({ dataStrattos: result1, dataBend: result2 })
      })
    })
  },

  ViewDetails: (req, res) => {
    const getDetails = req.params.id
    // console.log(getDetails)
    mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=2 AND p.id=${getDetails}`, (err, result1) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ detailRoadbikeHelios: result1 })
    })
  },

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
      if (err) {
        console.log('error server')
        return res.status(500).send(err)
      }
      if (results.length) {
        console.log('length result masuk', productId)
        const path = "/product/image";
        const upload = uploader(path, "product").fields([{ name: "image" }]);
        upload(req, res, err => {
          if (err) {
            console.log('error  server upload')
            return res.status(500).json({ message: "Upload post picture Failde", error: err.message })
          }
          const { image } = req.files;
          const imagePath = image ? path + "/" + image[0].filename : null;
          const data = JSON.parse(req.body.data);
          console.log(data)
          try {
            if (imagePath) {
              data.gambar = imagePath
            }

            sql = `UPDATE product SET ? where id=${productId}`
            mysqldb.query(sql, data, (err1, results1) => {
              console.log('masuk ke update');

              if (err1) {
                console.log('update gagal');
                console.log('isi result abis update', results1);


                if (imagePath) {
                  fs.unlinkSync("./public" + imagePath)
                }
                return res.status(500).json({ message: "There's Error on the server. Asshole", error: err1.message })
              }
              console.log('update berhasil');

              if (imagePath) {
                //===== Hapus Foto Lama =====\\
                if (results[0].gambar) {
                  fs.unlinkSync('./public' + results[0].gambar)
                }
              }

              mysqldb.query(`select p.*,c.category as categoryBike from product p left join category c on p.categoryid=c.id order by c.id`, (err, result1) => {
                if (err) res.status(500).send(err, "error")
                mysqldb.query(`select * from category`, (err, result2) => {
                  if (err) res.status(500).send(err, 'error');
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
    // console.log(req.params)
    let sql = `select * from product where id=${req.params.id}`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      if (result.length > 0) {
        sql = `delete from product where id=${req.params.id}`
        mysqldb.query(sql, (err, result1) => {
          console.log('Problem', err)
          if (err) res.status(500).send(err)
          if (result[0].gambar) {
            fs.unlinkSync('./public' + result[0].gambar)
          }
          mysqldb.query(`select p.*,c.category as categoryBike from product p left join category c on p.categoryid=c.id order by c.id`, (err, result2) => {
            if (err) res.status(500).send(err)
            mysqldb.query(`select * from category`, (err, result3) => {
              if (err) res.status(500).send(err)
              res.status(200).send({ dataProduk: result2, dataCategory: result3 })
            })
          })
        })
      } else {
        return res.status(500).send({ message: "Error Tau Kamu tuh!!" })
      }
    })

  },

  getProdukEquipment: (req, res) => {
    let sql = `dsa`;

  },


};

