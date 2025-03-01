const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });

    jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
        if (err) return res.status(403).redirect("https://dashboard-pka9.onrender.com");
        req.user = user;
        next();
    });
};

module.exports =  authenticateToken  