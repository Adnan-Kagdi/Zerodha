import "./CreateTicket.css"

function CreateTicket() {
    return (
        <div className="container">
            <p className="mt-5 offset-1" style={{ color: "#666666", fontSize: "1.4rem" }}>To create a ticket, select a relevant topic</p>
            <div className="row mt-5 offset-1">
                <div className="col-4 anch">
                    <p className="mb-4"><i class="fa-solid fa-circle-plus"></i>&nbsp;&nbsp;<a href="" className="hd" >Account Opening</a></p>
                    <p><a href="">Getting started</a></p>
                    <p><a href="">Online</a></p>
                    <p><a href="">Offline</a></p>
                    <p><a href="">Charges</a></p>
                    <p><a href="">Company, Partnership and HUF</a></p>
                    <p><a href="">Non Resident Indian (NRI)</a></p>
                </div>
                <div className="col-4 anch">
                    <p className="mb-4"><i class="fa-regular fa-user"></i>&nbsp;&nbsp;<a href="" className="hd" >Your Zerodha Account</a></p>
                    <p><a href="">Login credentials</a> </p>
                    <p><a href=""> Your Profile</a></p>
                    <p><a href=""> Account modification and segment addition</a></p>
                    <p><a href="">CMR & DP ID</a></p>
                    <p><a href="">Nomination</a></p>
                    <p><a href=""> Transfer and conversion of shares</a></p>
                </div>
                <div className="col-4 anch">
                    <p className="mb-4"><i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;<a href="" className="hd"> Trading and Markets</a></p>
                    <p><a href="">Trading FAQs</a></p>
                    <p><a href="">Kite</a></p>
                    <p><a href="">Margins</a></p>
                    <p><a href="">Product and order types</a></p>
                    <p><a href="">Corporate actions</a></p>
                    <p><a href=""> Kite features</a></p>
                </div>
            </div>
            <div className="row mt-5 offset-1">
                <div className="col-4 anch">
                    <p className="mb-4"><i class="fas fa-wallet"></i>&nbsp;&nbsp;<a href="" className="hd">Funds</a></p>
                    <p><a href="">Fund withdrawal</a></p>
                    <p><a href=""> Adding funds</a></p>
                    <p><a href="">Adding bank accounts</a></p>
                    <p><a href="">eMandates</a></p>
                </div>
                <div className="col-4 anch">
                    <p className="mb-4"> <i class="fas fa-terminal"></i>&nbsp;&nbsp;<a href="" className="hd">Console</a></p>
                    <p><a href="">IPO</a></p>
                    <p><a href="">Portfolio</a></p>
                    <p><a href="">Funds statement</a></p>
                    <p><a href="">Profile</a></p>
                    <p><a href="">Reports</a></p>
                    <p><a href="">Referral program</a></p>
                </div>
                <div className="col-4 anch">
                    <p className="mb-4"> <i class="fas fa-coins"></i>&nbsp;&nbsp;<a href="" className="hd">Coin</a></p>
                    <p><a href="">Understanding mutual funds and Coin</a></p>
                    <p><a href="">Coin app</a></p>
                    <p><a href=""> Coin web</a></p>
                    <p><a href=""> Transactions and reports</a></p>
                    <p><a href=""> National Pension Scheme (NPS)</a></p>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;