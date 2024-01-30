const mysql = require('mysql2')

const pool = require('../sql/connection')

const getTitles = (req, res) => {
   

    let sql = "SELECT * FROM titles LIMIT 1000"
    // SELECT DISTINCT title FROM titles
    pool.query(sql, (err, rows) => {
      console.log(rows)
      if (err) {

        return res.json(err);
      }
      return res.json(rows);

    })

  }

const getTitleByEmployeeById = (req, res) => {

    let sql = "SELECT * FROM titles WHERE emp_no = ?";
    // emp_no?

    sql = mysql.format(sql, [req.params.employeeId])
  
    pool.query(sql, (err, rows) => {
      if (err) {

        return res.json(err);
      }
      return res.json(rows);
    });
  }

const createTitle = (req, res) => {

   

    let sql = "INSERT INTO titles (emp_no, title, from_date) VALUES (?, ?, ?)";
    // from date???

    sql = mysql.format(sql, [req.body.emp_no, req.body.title, new Date()])
  
    pool.query(sql, (err, results) => {

      if (err) {

        return res.json(err);
      }
      return res.json(req.body);
    //   { newId: results.insertId }
    //   emp_no? or title?
    });
  }

const updateTitle= (req, res) => {
    
    let sql = "UPDATE titles SET title = ?, from_date = ? WHERE emp_no = ?";
   
    sql = mysql.format(sql, [req.body.title, new Date(), req.body.employeeId])
  
    pool.query(sql, (err, results) => {

        if (err) {

            return res.json(err);

          }

          return res.json(req.body);

        });
  }

const deleteTitle = (req, res) => {
    
    let sql = "DELETE FROM titles WHERE emp_no = ?";
   
    sql = mysql.format(sql, [req.params.employeeId])
  
    pool.query(sql, (err, results) => {

        if (err) {

            return res.json(err);

          }
          return res.json({ message: `Deleted ${results.affectedRows} title(s)` });

        });
  }

  module.exports = {
    getTitles,
    getTitleByEmployeeById,
    createTitle,
    updateTitle,
    deleteTitle
  }