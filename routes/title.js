const express = require('express')

const {

  getTitles,

  getTitleByEmployeeById,

  createTitle,

  updateTitle,

  deleteTitle

} = require('../controllers/salary.js')

const router = express.Router()

router.get('/', getTitles);

router.get('/:employeeId', getTitleByEmployeeById);

router.post('/', createTitle);

router.put('/:employeeId', updateTitle);

router.delete('/:employeeId', deleteTitle);

module.exports = router;