const express = require('express');

const router = express.Router();

const mainRoute = require('../controller/main');

router.post('/expense/add-expenses', mainRoute.addExpense);

router.get('/expense/get-expenses', mainRoute.getExpense);

router.delete('/expense/delete-expenses/:id', mainRoute.deleteExpense);

module.exports = router;
