function Brokerage() {
    return (
        <div className="container border-top">
            <div className="row mt-5">
                <div className="col-7">
                    <h4 className="text-center mb-4" style={{ color: "#387ED1" }}>Brokerage Calculator</h4>
                    <ul style={{ fontSize: "0.8rem", lineHeight: "2.2rem", color: "#424242" }}>
                        <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                        <li>Digital contract notes will be sned via email</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4 className="text-center" style={{ color: "#387ED1" }}>List of charges</h4>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;