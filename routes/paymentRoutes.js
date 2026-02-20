const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  createPayment,
  verifyPayment,
  getTransactions
} = require("../controllers/paymentController");

router.post("/create", auth, createPayment);
router.post("/verify", auth, verifyPayment);
router.get("/all", auth, getTransactions);

module.exports = router;