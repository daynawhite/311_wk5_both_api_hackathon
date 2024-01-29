const mysql = require('mysql2')
const pool = require('..sql/connection')
// const { handleSQLError } = require('../sql/error')

const getDepartments = (req, res) => {
    pool.query("SELECT * FROM departments", (err, rows) => {
        // if (err) return handleSQLError(res, err)
        return res.json(rows)
    })
}

const getDepartmentById = (req, res) => {
    let sql = 'SELECT ?? FROM ?? WHERE ?? = ?';
    const replacements = ['*','departments', 'dept_no', req.params.id];
    sql = mysql.format(sql, []);

    pool.query(sql, (err, row) => {
        // if (err) return handleSQLError(res, err)
        return res.json(row)
    })
}

const createDepartment = (req, res) => {
    let sql = 'INSERT INTO ?? VALUES ??';
    const replacements = ['departments', {...req.body}];
    sql = mysql.format(sql, []);

    pool.query(sql, (err, row))
    
}

const updateDepartment = (req, res) => {
    
}

const deleteDepartment = (req, res) => {
    
}

module.exports = {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment
}