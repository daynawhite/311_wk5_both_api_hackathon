const express = require('express')
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controller/employee.js')
const router = express.Router()

router.get('/', getAllEmployees);

router.get('/:emp_no', getEmployeeById);

router.post('/', createEmployee);

router.put('/:emp_no', updateEmployee);

router.delete('/:emp_no', deleteEmployee);

module.exports = router;