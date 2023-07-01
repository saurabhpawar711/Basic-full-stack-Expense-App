
const Expense = require('../model/productExpense');


exports.addExpense = async (req, res, next) => {
    try {
        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category;

        const data = await Expense.create({ amount: amount, description: description, category: category })
        res.status(201).json({ expenseDetails: data });
    }
    catch (err) {
        console.log(err);
    }
}

exports.getExpense = async (req, res, next) => {
    try {
        const response = await Expense.findAll();
        res.status(202).json({ gotDetails: response })
    }
    catch (err) {
        console.log(err);
    }
}

exports.deleteExpense = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Expense.destroy({where: {id: id}});
        res.sendStatus(203);
    }
    catch (err) {
        console.log(err);
    }
}