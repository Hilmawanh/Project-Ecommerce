const { mysqldb } = require("../connection");
const { uploader } = require("../helper/uplouder");
const fs = require("fs");
const paginate = require('jw-paginate')

module.exports = {
  getProdukSepeda: (req, res) => {
    const sqlCount = `SELECT COUNT(*) as count FROM product`
    let dataCount
    mysqldb.query(sqlCount, (err, result) => {
      if (err) res.status(500).send(err)
      dataCount = result[0].count
      //trigger pindah page
      const page = parseInt(req.params.page)
      const pageSize = 6
      const pager = paginate(dataCount, page, pageSize)

      let offset
      if (page === 1) {
        offset = 0
      } else {
        offset = pageSize * (page - 1)
      }

      let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id LIMIT ? OFFSET ?`
      mysqldb.query(sql, [pageSize, offset], (err1, result1) => {
        if (err1) res.status(500).send(err1)
        // console.log(result1, 'result1')

        let sqlCat = `select * from category`
        mysqldb.query(sqlCat, (err2, result2) => {
          if (err2) res.status(500).send(err2)
          let sqlEdit = `select p.* from product p left join category c on p.categoryid=c.id order by c.id`
          mysqldb.query(sqlEdit, (err3, result3) => {
            if (err3) res.status(500).send(err3)
            const pageOfData = result1
            return res.status(200).send({ pageOfData, pager, dataCategory: result2, sqlEdit: result3 })
          })
        })
      })
    })

    // let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id`
    // mysqldb.query(sql, (err, result) => {
    //   if (err) res.status(500).send(err)

    //   let sqlCat = `select * from category`
    //   mysqldb.query(sqlCat, (err, result2) => {
    //     if (err) res.status(500).send(err)

    //     let sqlEdit = `select p.* from product p left join category c on p.categoryid=c.id order by c.id`
    //     mysqldb.query(sqlEdit, (err, result3) => {
    //       if (err) res.status(500).send(err)
    //       return res.status(200).send({ dataProduk: result, dataCategory: result2, dataEdit: result3 })
    //     })
    //   })
    // })
  },


  getProdukMountain: (req, res) => {
    const sqlCount = `SELECT COUNT(*) as count FROM product p JOIN category c on c.id = p.categoryid where c.id=1;`
    let dataCount
    mysqldb.query(sqlCount, (err, result) => {
      if (err) res.status(500).send(err)
      dataCount = result[0].count
      //trigger pindah page
      const page = parseInt(req.params.page)
      const pageSize = 5
      const pager = paginate(dataCount, page, pageSize)

      // Untuk limit database
      let offset
      if (page === 1) {
        offset = 0
      } else {
        offset = pageSize * (page - 1)
      }
      let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=1 LIMIT ? OFFSET ?`
      console.log(result)
      mysqldb.query(sql, [pageSize, offset], (err1, result1) => {
        if (err1) res.status(500).send(err1)
        // console.log(result1, 'result1')
        const pageOfData = result1
        return res.status(200).send({ pageOfData, pager })
      })
    })

  },

  getProdRoadbike: (req, res) => {
    const sqlCount = `SELECT COUNT(*) as count FROM product p JOIN category c on c.id = p.categoryid where c.id=2;`
    let dataCount
    mysqldb.query(sqlCount, (err, result) => {
      if (err) res.status(500).send(err)
      dataCount = result[0].count

      //trigger pindah page
      const page = parseInt(req.params.page)
      const pageSize = 7
      const pager = paginate(dataCount, page, pageSize)

      // Untuk limit database
      let offset
      if (page === 1) {
        offset = 0
      } else {
        offset = pageSize * (page - 1)
      }
      let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=2 LIMIT ? OFFSET ?`
      // console.log(result)
      mysqldb.query(sql, [pageSize, offset], (err1, result1) => {
        if (err1) res.status(500).send(err1)
        console.log(result1, 'result1')
        const pageOfData = result1
        return res.status(200).send({ pageOfData, pager })
      })
    })
  },

  getProdukDaily: (req, res) => {
    let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=3`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ dataDaily: result })
    })
  },

  getProdukBmx: (req, res) => {
    let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=4`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ dataBmx: result })
    })
  },

  getProdukEbike: (req, res) => {
    let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=5`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ dataEbike: result })
    })
  },

  getProdukGear: (req, res) => {
    mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=6`, (err, result1) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ dataApparels: result1 })
    })
  },

  getProdukSpareParts: (req, res) => {
    let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=7`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ dataSpareParts: result })
    })
  },

  ViewDetailsRoadbike: (req, res) => {
    const getDetails = req.params.id
    mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=2 AND p.id=${getDetails}`, (err, result1) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ detailRoadbikeHelios: result1 })
    })
  },

  ViewDetailsMountain: (req, res) => {
    const getId = req.params.id
    let sql = `select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=1 AND p.id=${getId}`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      res.status(200).send({ detailMountain: result })
    })
  },

  ViewDetailDailyBmxEbike: (req, res) => {
    const getId = req.params.id
    mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=3 AND p.id=${getId}`, (err, result1) => {
      if (err) res.status(500).send(err)
      mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=4 AND p.id=${getId}`, (err, result2) => {
        if (err) res.status(500).send(err)
        mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=5 AND p.id=${getId}`, (err, result3) => {
          if (err) res.status(500).send(err)
          res.status(200).send({ detailDaily: result1, detailBmx: result2, detailEbike: result3 })
        })
      })
    })
  },

  ViewDetailGear: (req, res) => {
    const getId = req.params.id
    mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=6 AND p.id=${getId}`, (err, result1) => {
      if (err) res.status(500).send(err)
      mysqldb.query(`select p.*,c.category from product p join category c on p.categoryid=c.id where categoryid=7 AND p.id=${getId}`, (err, result2) => {
        if (err) res.status(500).send(err)
        res.status(200).send({ detailApparels: result1, detailSpareParts: result2 })
      })
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
                res.status(200).send({ pageOfData: result1, dataCategory: result2 });
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
                if (results[0].gambar) {
                  fs.unlinkSync('./public' + results[0].gambar)
                }
              }

              mysqldb.query(`select p.*,c.category as categoryBike from product p left join category c on p.categoryid=c.id order by c.id`, (err, result1) => {
                if (err) res.status(500).send(err, "error")
                mysqldb.query(`select * from category`, (err, result2) => {
                  if (err) res.status(500).send(err, 'error');
                  res.status(200).send({ pageOfData: result1, dataCategory: result2 })
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
              res.status(200).send({ pageOfData: result2, dataCategory: result3 })
            })
          })
        })
      } else {
        return res.status(500).send({ message: "Error Tau Kamu tuh!!" })
      }
    })

  },

  adminGetPayment: (req, res) => {
    let sql = `select transactiondetail.*,product.produk from transactiondetail join transactions on transactions.id=transactiondetail.idtransaksi left join product on transactiondetail.productid = product.id where transactions.status='isPayment'; `

    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)
      return res.status(200).send({ dataPayment: result })
    })
  },

  adminGetPayment2: (req, res) => {
    let sql = `UPDATE transactions SET status = 'Confirm' WHERE id = '${req.params.id}'`
    mysqldb.query(sql, (err, result1) => {
      if (err) res.status(500).send(err)

      // const UserIdRedux = req.params.id
      let sql = `select * from transactiondetail join transactions on transactions.id=transactiondetail.idtransaksi where transactions.status='isPayment' `
      mysqldb.query(sql, (err2, result2) => {
        if (err2) res.status(500).send(err2)
        return res.status(200).send({ updateStatus: result1, dataPayment: result2 })
      })
    })
  },

  declinePayment: (req, res) => {
    let sql = `UPDATE transactions SET status = 'Decline' WHERE id = '${req.params.id}'`
    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err)

      let sql = `select * from transactiondetail join transactions on transactions.id=transactiondetail.idtransaksi where transactions.status='isPayment'`
      mysqldb.query(sql, (err2, result2) => {
        if (err2) res.status(500).send(err2)
        return res.status(200).send({ updateStatus: result, dataPayment: result2 })
      })
    })
  }

}
