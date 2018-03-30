const express = require('express');
const router  = express.Router();

const validate          = require('../http/middlewares/validate.middleware');
const studentController = require('../http/controllers/student.controller');

// Create
router.post('/create',
    validate,
    studentController.create
);

// Find All
router.get('/all',
    studentController.findAll
);

// Find One
router.get('/detail/:id',
    studentController.findOne
);

// Update
router.put('/edit/:id',
    validate,
    studentController.edit
);

// Delete
router.delete('/delete/:id',
    studentController.delete
);

module.exports = router;
