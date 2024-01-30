const mysql = require('mysql2')
const connection = require('../sql/connection')

const getSalaries = (req, res) => {
    const sql = 'SELECT * FROM salaries LIMIT 100'
    connection.query(sql, (err, rows) => {
        if (err) return handleSQLError(res,err)
        return res.json(rows)
    })
}
const getSalaryByEmployeeByID = (req, res) => {
    const sql = 'SELECT * FROM salaries where id = ?'
    sql = mysql.format(sql, [req.params.emp_no])
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(404).send('An error occured: ' + err.sqlMessage)
        }
    })
}
const createSalary = (req, res) => {
    const sql = 'SELECT '
    connection.query(sql, (err, rows) => {

    })
}
const updateSalary = (req, res) => {
    const sql = 'SELECT '
    connection.query(sql, (err, rows) => {

    })
}
const deleteSalary = (req, res) => {
    const sql = 'SELECT '
    connection.query(sql, (err, rows) => {

    })
}

module.exports = {
    getSalaries,
    getSalaryByEmployeeByID,
    createSalary,
    updateSalary,
    deleteSalary
}