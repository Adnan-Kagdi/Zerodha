import "./Hero.css"

function Hero() {
    return (
        <div className="container p-5">
            <div className="row">
                <img src="media/images/homeHero.png" alt="Hero Image" />
            </div>
            <div className="investMsg mt-1" >
                <h1>Invest in everything</h1>
                <p className="mt-4 mb-4" >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a href="/signup" style={{ color: "white" }}>
                    <button className=" signupBtn mt-3">
                        Sign up for free
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Hero;