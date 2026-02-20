const Transaction = require("../models/Transaction");
const { v4: uuidv4 } = require("uuid");

exports.createPayment = async (req, res) => {
  const { amount } = req.body;

  if (amount <= 0)
    return res.status(400).json({ message: "Invalid amount" });

  const transaction = new Transaction({
    userId: req.user.id,
    amount,
    transactionId: uuidv4()
  });

  await transaction.save();
  res.json(transaction);
};

exports.verifyPayment = async (req, res) => {
  const { transactionId, status } = req.body;

  const transaction = await Transaction.findOne({ transactionId });
  if (!transaction)
    return res.status(404).json({ message: "Transaction not found" });

  transaction.status = status;
  await transaction.save();

  res.json({ message: "Payment updated", transaction });
};

exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.find({ userId: req.user.id });
  res.json(transactions);
};