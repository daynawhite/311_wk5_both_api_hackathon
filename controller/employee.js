const mysql = require('mysql');
const pool = require('../sql/connection');

const getAllEmployees = (req, res) => {
    pool.query("SELECT * FROM employees", (err, rows) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(rows);
    });
};

const getEmployeeById = (req, res, next) => {
    const empNo = req.params.emp_no;

    let sql = "SELECT * FROM employees WHERE emp_no = ?";
    sql = mysql.format(sql, [empNo]);

    pool.query(sql, (err, rows) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(rows[0]);
    });
};

const createEmployee = (req, res) => {
    let sql = "INSERT INTO employees (emp_no, birth_date, first_name, last_name, gender, hire_date) VALUES (?, ?, ?, ?, ?, ?)";
    sql = mysql.format(sql, [req.body.emp_no, req.body.birth_date, req.body.first_name, req.body.last_name, req.body.gender, req.body.hire_date]);

    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json({ emp_no: results.insertId, ...req.body });
    });
    
};


const updateEmployee = (req, res) => {
    const emp_no = req.params.emp_no; 
  
  
    let sql = "UPDATE employees SET birth_date = ?, first_name = ?, last_name = ?, gender = ?, hire_date = ? WHERE emp_no = ?";
  
    sql = mysql.format(sql, [req.body.birth_date, req.body.first_name, req.body.last_name, req.body.gender, req.body.hire_date, emp_no]);
  
    pool.query(sql, (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ error: `An error occurred while updating the employee: ${err.message}` });
      } else {
        if (results.affectedRows > 0) {
          return res.json({ message: `Updated employee with emp_no: ${emp_no}` });
        } else {
          return res.status(404).json({ error: `Employee with emp_no ${emp_no} not found` });
        }
      }
    });
};
  

const deleteEmployee = (req, res) => {
    let sql = "DELETE FROM employees WHERE emp_no = ?";
    
    sql = mysql.format(sql, [req.params.emp_no]);
    
    pool.query(sql, (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ error: `An error occurred while deleting the user: ${err.message}` });
      } else {
        if (results.affectedRows > 0) {
          return res.json({ message: `Deleted employee with emp_no: ${req.params.emp_no}` });
        } else {
          return res.status(404).json({ error: `Employee with emp_no ${req.params.emp_no} not found` });
        }
      }
    });
};
  
  
module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}