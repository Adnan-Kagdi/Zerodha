function Hero() {
    return (
        <div className="container" style={{ marginTop: "6rem" }}>
            <div className="text-center">
                <h1 style={{ fontSize: "2.8rem", color: "#424242" }}>Charges</h1>
                <p className="mt-3 fs-5" style={{ color: "#9B9B9B" }}>List of all charges and taxes</p>
            </div>
            <div className="row text-center p-3" style={{ margin: "4rem", marginTop: "7rem", color: "#424242" }}>
                <div className="col-4 p-4">
                    <img src="media/images/pricing0.svg" style={{ padding: "0", width: "70%" }} className="mb-2" />
                    <h2>Free equity delivery</h2>
                    <p className="mt-4" style={{ fontSize: "1.05rem", lineHeight: "1.8rem" }}>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4 p-2">
                    <img src="media/images/intradayTrades.svg" style={{ padding: "0", width: "70%" }} className="mb-2" />
                    <h2>Intraday and F&O trades</h2>
                    <p className="mt-4" style={{ fontSize: "1.05rem", lineHeight: "1.8rem" }}>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency,
                        and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/images/pricing0.svg" style={{ padding: "0", width: "70%" }} className="mb-2" />
                    <h2>Free direct MF</h2>
                    <p className="mt-4" style={{ fontSize: "1.05rem", lineHeight: "1.8rem" }}>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;