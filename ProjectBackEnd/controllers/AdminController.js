const { mysqldb } = require("../connection");

module.exports = {
  addNewProject: (req, res) => {
    let sql = `insert into product set ?`;

    mysqldb.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(res);
    });
  }
};
