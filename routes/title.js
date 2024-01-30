const express = require('express')

const titlesControllers = require('../controllers/title');

const router = express.Router()


// const {

//   getTitles,

//   getTitleByEmployeeById,

//   createTitle,

//   updateTitle,

//   deleteTitle

// } = require('../controllers/salary.js')


// const getTitles = require('../controllers/title');

// const router = express.Router()

router.get('/', titlesControllers.getTitles);

router.get('/:employeeId', titlesControllers.getTitleByEmployeeById);

router.post('/', titlesControllers.createTitle);

router.put('/:employeeId', titlesControllers.updateTitle);

router.delete('/:employeeId', titlesControllers.deleteTitle);

module.exports = router;