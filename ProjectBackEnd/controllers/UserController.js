const { mysqldb } = require("../connection");

module.exports = {
  getProdukSepeda: (req, res) => {
    let sql = `SELECT * FROM product`;

    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },

  getProdukEquipment: (req, res) => {
    
  },

  postProduk: (req, res) => {
    let sql = `INSERT INTO product set ?`;

    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(res);
    });
  }
};
