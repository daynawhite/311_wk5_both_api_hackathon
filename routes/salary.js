const express = require('express');
const router = express.Router();

const {
    getSalaries,
    getSalaryByEmployeeByID,
    createSalary,
    // updateSalary,
    deleteSalary
} = require('../controllers/salary.js');

router.get('/', getSalaries);

router.get('/:employeeId', getSalaryByEmployeeByID);

router.post('/', createSalary);

// router.put('/:employeeId', updateSalary);

router.delete('/', deleteSalary);

module.exports = router;