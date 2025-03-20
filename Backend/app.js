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

app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Origin", req.headers.origin);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     next();
// });

const allowedOrigins = [
    "https://info-18ts.onrender.com",
    "https://dashboard-pka9.onrender.com"
];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (like mobile apps, curl, etc.)
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg = "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// app.use(cors());

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

// app.get("/check-userId", (req, res) => {
//     const userId = req.headers.authorization; // Get from frontend request
//     if (!userId) {
//         return res.status(401).json({ authenticated: false });
//     }
//     res.json({ authenticated: true });
// });

// Logout: Clear the token cookie
app.post("/logout", (req, res) => {
    res.json({ success: true, redirectUrl: "https://info-18ts.onrender.com/logout-clear" });
});

app.get("/getUser/:id", async (req, res) => {
    const { id } = req.params
    const result = await User.findById(id);
    res.json(result);
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})