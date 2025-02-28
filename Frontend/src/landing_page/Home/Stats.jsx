import "./Stats.css"

function Stats() {
    return (
        <div className="statContainer ">
            <div className=" row statInfo">
                <h2>Trust with confidence</h2>
                <div>
                    <h4>Customer-first always</h4>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                </div>
                <div>
                    <h4>No spam or gimmicks</h4>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                </div>
                <div>
                    <h4>The Zerodha universe</h4>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                </div>
                <div>
                    <h4>Do better with money</h4>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
            </div>

            <div className="statImg">
                <img src="media/images/ecosystem.png" />
                <div className="statAnc" >
                    <a href="#" >Explore our products <i class="fa-solid fa-arrow-right"></i> </a>
                    <a href="#" >Try kit demo <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
            </div>
        </div>
    );
}

export default Stats;