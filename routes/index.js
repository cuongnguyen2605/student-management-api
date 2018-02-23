const express = require('express');
const router  = express.Router();

const createMiddleware = require('../http/middlewares/create.middleware');
const crudController   = require('../http/controllers/crud.controller');

// Create
// data => middleware => controller => service
router.post('/create',
    createMiddleware,
    crudController.create
);

// Find All
router.get('/all', crudController.findAll);

// Find One
router.get('/detail/:id');

// Update
router.put('/');

// Delete
router.delete('/');

module.exports = router;
