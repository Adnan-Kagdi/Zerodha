import "./Awards.css"

function Award() {
    return (
        <div className=" row awardContainer">
            <div className=" col-6  awardImg ">
                <img src="media/images/largestBroker.svg" />
            </div>
            <div className=" col-6 awardText">
                <h2 className="mb-2">Largest stock broker in india</h2>
                <p className="mt-2 fs-5">2+ zerodha clients contribute to over 15% all retail order volumes in india by trading and investing</p>
                <div className="awardInfo">
                    <span>
                        <ul>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>currency derivatives</li>
                        </ul>
                    </span>
                    <span className="info2">
                        <ul>
                            <li>Stock and IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds anf Govt. Securities</li>
                        </ul>
                    </span>
                </div>
                <div className="textImg mt-3">
                    <img src="media/images/pressLogos.png" />
                </div>
            </div>
        </div>
    );
}

export default Award;