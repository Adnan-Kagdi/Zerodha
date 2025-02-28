import "./Footer.css"

function Footer() {
    return (
        <div>
            <div className="footerContainer">
                <div className="zerodhaSource" >
                    <div className="zerodhaIcon">
                        <h5><img src="media/images/logo.svg" /></h5>
                    </div>
                    <p>
                        © 2010 - 2025, Zerodha Broking Ltd.
                        All rights reserved.
                    </p>
                    <div>
                        <h5> <i class="fa-brands fa-x-twitter"></i></h5>
                        <h5 className="color"><i className="fa-brands fa-square-facebook"></i></h5>
                        <h5 className="color"> <i className="fa-brands fa-instagram"></i></h5>
                        <h5 className="color"><i className="fa-brands fa-linkedin-in"></i> </h5>
                    </div>
                    <hr></hr>
                    <div>
                        <h5> <i className="fa-brands fa-youtube"></i></h5>
                        <h5><i className="fa-brands fa-whatsapp"></i></h5>
                        <h5 className="color"><i class="fa-brands fa-telegram"></i></h5>
                    </div>

                </div>
                <div className="footerList" >
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Products</p>
                    <p>Pricing</p>
                    <p>Referral programme</p>
                    <p>Careers</p>
                    <p>Zerodha.tech</p>
                    <p>Open source</p>
                    <p>Press & media</p>
                    <p>Zerodha Cares (CSR)</p>
                </div>
                <div className="footerList">
                    <h3>Support</h3>
                    <p> Contact us</p>
                    <p>Support portal</p>
                    <p>Z-Connect blog</p>
                    <p>List of charges</p>
                    <p>Downloads & resources</p>
                    <p>Videos</p>
                    <p>Market overview</p>
                    <p>How to file a complaint?</p>
                    <p>Status of your complaints</p>
                </div>
                <div className="footerList">
                    <h3>Account</h3>
                    <p> Open an account</p>
                    <p>Fund transfer</p>
                </div>
            </div>
            <div className="footerText text-muted">
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
                    Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
                    Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#">complaints@zerodha.com</a>, for DP related to <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the Risk
                    Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p>
                    Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
                    redressal of the grievances
                </p>
                <p>
                    <a href="#">Smart Online Dispute Resolution</a> | <a href="#">Grievances Redressal Mechanism</a>
                </p>
                <p>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker /
                    depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL
                    every month.</p>
                <p>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the
                    day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same
                    process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to
                    authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of
                    others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#">create a ticket here</a>.
                </p>
            </div>
        </div>
    );
}

export default Footer;