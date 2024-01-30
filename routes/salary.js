const express = require('express');
const router = express.Router();

const {
    getSalaries,
    getSalaryByEmployeeByID,
    createSalary,
    updateSalary,
    deleteSalary
} = require('../controller/salary.js');

router.get('/', getSalaries);

router.get('/:employeeId', getSalaryByEmployeeByID);

router.post('/', createSalary);

router.put('/:employeeId', updateSalary);

router.delete('/:employeeId', deleteSalary);

module.exports = router;