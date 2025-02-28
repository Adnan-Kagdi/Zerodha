import "./Pricing.css"

function Pricing() {
    return (
        <div class="pricingContainer" >
            <div className="pricingText " >
                <h2>Unbeatable pricing</h2>
                <p className="mt-4" >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="#" className="mt-3">See pricing  <i class="fa-solid fa-arrow-right ms-1" ></i> </a>
            </div>
            <div className="pricingImg mt-4" >
                <div>
                    <img src="media/images/pricingMF.svg" />
                    <a href="/signup" style={{color: "white"}}>
                        <span> Free account
                            opening </span>
                    </a>
                </div>
                <div className="pricing0">
                    <img src="media/images/pricingEquity.svg" />
                    <span>Free equity delivery
                        and direct mutual funds </span>
                </div>
                <div className="pricing20">
                    <img src="media/images/intradayTrades.svg" />
                    <span> Intraday and
                        F&O </span>
                </div>

            </div>
        </div>
    );
}

export default Pricing;