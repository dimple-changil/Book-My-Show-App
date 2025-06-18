const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/payments", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PaymentSchema = new mongoose.Schema({
  userName: String,
  status: String,
  timestamp: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", PaymentSchema);

app.post("/payment", async (req, res) => {
  const { userName, status } = req.body;
  try {
    const payment = new Payment({ userName, status });
    await payment.save();
    res.status(201).json({ message: "Payment record saved." });
  } catch (err) {
    res.status(500).json({ error: "Failed to save payment." });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
