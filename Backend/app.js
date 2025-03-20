require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositonsModel");
const { OrdersModel } = require("./models/OrdersModel")

const authenticateToken = require("./authenticateToken.js");
const { User } = require("./models/UserModel.js");

const PORT = process.env.PORT || 3000
const url = process.env.MONGO_URL

main()
    .then(() => {
        console.log("DB connected");
    }).catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

const app = express();

app.use((err, req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.status(err.status || 500).json({ error: err.message });
});

const allowedOrigins = [
    "https://info-18ts.onrender.com",
    "https://dashboard-pka9.onrender.com"
];

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "DELETE"],
        // credentials: true,  // Remove if not using cookies
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute)


app.get("/addHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/addPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    })

    newOrder.save();

    res.send("Orders saved!");
})

app.get("/addOrders", async (req, res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
})

app.post("/logout", (req, res) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    res.json({ redirectUrl: "https://info-18ts.onrender.com/login" });
});

app.get("/getCurrUser", async (req, res) => {
    const userId = req.query.userId
    if (!userId) {
      return res.json({ status: false });
    }
    const user = await User.findById(userId);
    if (user) return res.json({ status: true, user: user.username });
    else return res.json({ status: false });
  });

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})