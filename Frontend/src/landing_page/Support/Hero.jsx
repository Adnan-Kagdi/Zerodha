import "./Hero.css"

function Hero() {
    return (
        <div style={{ backgroundColor: "#387ED1", color: "white" }}>
            <div className="container ml-0 mr-0">
                <div className="row m-auto ">
                    <div className="col-6 mt-5 pb-4" style={{ marginBottom: "5rem", paddingLeft: "5rem" }}>
                        <h4 className="text-start">Support Portal</h4>
                        <div className="mt-5">
                            <h4>Search for an answer or browse help topics to create a ticket</h4>
                            <div className="search mt-4" style={{ width: "100%", height: "3.5rem", backgroundColor: "white" }}>
                                <input
                                    type="search"
                                    placeholder="Eg: how do i active F&O, why is my order getting rejected... "
                                    className="support-search"
                                    style={{ width: "90%", height: "3.5rem", backgroundColor: "white" }}
                                />
                                <i class="fa-solid fa-magnifying-glass ms-2" style={{ color: "gray" }}></i>
                            </div>
                            <div className="supportA d-flex mt-3 anc1 anc">
                                <a href="">Track account opening</a>
                                <a href="" className="ms-4"> Track segment activation</a>
                                <a href="" className="ms-4"> Intraday margins</a>
                                <a href="" className="mt-2">Kite user manual</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-5 pb-4">
                        <p className="text-end anc" style={{ fontSize: "1.05rem", marginRight: "6.8rem", textUnderlineOffset: "8px" }}><a href="">Track tickets</a></p>
                        <div className="" style={{ marginLeft: "2rem", marginTop: "5rem" }}>
                            <h4>Featured</h4>
                            <ol className="ms-3 mt-3 anc2 anc">
                                <li><a href="">Special live trading session on Saturday, February 1, 2025</a></li>
                                <li className="mt-3"><a href="">Latest Intraday leverages and Square-off timings</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;