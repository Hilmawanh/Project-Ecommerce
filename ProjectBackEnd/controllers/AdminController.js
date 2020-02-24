const { mysqldb } = require("../connection");
const { uploader } = require("../helper/uplouder");
const fs = require("fs");

module.exports = {
  addNewProduk: (req, res) => {
    try {
      const path = "/product/image";
      const upload = uploader(path, "Product").fields([{ name: "Image" }]);

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

        data.image = imagePath;

        var sql = `INSERT INTO product SET ?`;
        mysqldb.query(sql, data, (err, results) => {
          if (err) {
            console.log(err.message);
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
      return res.status(500).json({ message: "There's error on the server", error: err.message });
    }

  },

  deleteProduk: (req, res) => { },

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
              mysqldb.query(`select p.*,c.category as categoryBike from product p left join category c on p.categoryid=c.id order by c.id`, (err, result6) => {
                if (err) res.status(500).send(err)
                mysqldb.query(`select * from category`, (err, result7) => {
                  if (err) res.status(500).send(err)

                })
              })
            })
          })
        })
      })
    })
  },

  getProdukEquipment: (req, res) => {
    let sql = ``;
  }
};
