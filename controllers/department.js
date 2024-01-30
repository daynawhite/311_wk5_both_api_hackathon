const mysql = require('mysql2')
const pool = require('..sql/connection')
const { handleSQLError } = require('../sql/error')

const getDepartments = (req, res) => {
    pool.query("SELECT * FROM departments", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows)
    })
}

const getDepartmentById = (req, res) => {
    let deptId = req.params.id;
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    const replacements = ['departments', 'dept_no', deptId];
    sql = mysql.format(sql, replacements);

    pool.query(sql, (err, row) => {
        if (err) return handleSQLError(res, err)
        return res.json(row)
    })
}

const createDepartment = (req, res) => {
    let sql = 'INSERT INTO ?? (??, ??) VALUES (??, ??)';
    const replacements = ['departments', 'dept_no', 'dept_name', req.body.dept_no, req.body.dept_name];
    sql = mysql.format(sql, replacements);

    pool.query(sql, (err, row) => {
        if (err) return handleSQLError(res, err)
        return res.json(row);
      })
    
}

const updateDepartment = (req, res) => {
    let sql = ""
    const replacements = [];
    sql = mysql.format(sql, replacements)
}

const deleteDepartment = (req, res) => {
    let sql = 'DELETE FROM ?? WHERE ?? = ??'
    const replacements = ['departments','dept_no', req.params.id]
}

module.exports = {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment
}