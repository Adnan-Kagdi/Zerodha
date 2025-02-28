import "./Education.css"

function Education() {
    return (
        <div className="eduContainer">
            <div className="eduImg" >
               <img src="media/images/education.svg" />
            </div>
            <div className="eduInfo">
                <h2>Free and open market education</h2>
                <div className="mt-4" >
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="mt-4" >
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#">Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;