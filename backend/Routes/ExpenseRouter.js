const { fetchExpenses, addExpenses, deleteExpenses } = require('../Controllers/ExpenseController');

const router = require('express').Router();

// fetch all the expenses of user based on user_id
router.get("/", fetchExpenses);

// Add Expenses
router.post("/", addExpenses);

// Delete Expenses
router.delete("/:expenseId", deleteExpenses);

module.exports = router;