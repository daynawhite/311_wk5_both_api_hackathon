const mysql = require('mysql2')
const connection = require('../sql/connection')

const getSalaries = (req, res) => {
    const sql = 'SELECT * FROM salaries LIMIT 100'
    connection.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows)
    })
}
const getSalaryByEmployeeByID = (req, res) => {
    var sql = 'SELECT * FROM salaries where emp_no = ?'
    sql = mysql.format(sql, [req.params.employeeId])
    connection.query(sql, (err, rows) => {
        if (err) {
            console.error(err)
            return res.status(500).json
        }
        return res.json(rows)
    })
}
const createSalary = (req, res) => {
    var sql = 'INSERT INTO salaries (emp_no, salary, from_date, to_date) VALUES (?, ?, ?, ?)'
    sql = mysql.format(sql, [req.body.emp_no, req.body.salary, req.body.from_date, req.body.to_date])

    connection.query(sql, (err, rows) => {
        if (err) {
            console.error(err)
            return res.status(500).json
        }
        return res.json(rows)
    })
}

// const updateSalary = (req, res) => {
//     const sql = 'UPDATE salaries SET salary = ?, from_date = ?, to_date = ? WHERE emp_no = ?'
//     sql = mysql.format(sql, [req.body.salary, req.body.from_date, req.body.to_date, req.params.id])
//     connection.query(sql, (err, rows) => {
//         if (err) {
//             console.error(err)
//             return res.status(500).json
//         }
//         return res.json(rows)
//     })
// }

const deleteSalary = (req, res) => {
    var sql = 'DELETE FROM salaries WHERE emp_no = ? AND salary = ?'
    sql = mysql.format(sql, [req.body.emp_no, req.body.salary])
    connection.query(sql, (err, rows) => {
        if (err) {
            console.error(err)
            return res.status(500).json
        }
        return res.json(rows)
    })
}

module.exports = {
    getSalaries,
    getSalaryByEmployeeByID,
    createSalary,
    // updateSalary,
    deleteSalary
}