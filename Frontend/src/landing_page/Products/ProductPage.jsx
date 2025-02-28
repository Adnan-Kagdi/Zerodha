import Hero from "./Hero";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Universe from "./Universe"

function ProductPage() {
    return (
        <div>
             <Hero />
            <LeftSection
                ImageUrl={"media/images/kite.png"}
                Title={"Kite"}
                Description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
                TryDemo={"Try demo  →"}
                LearnMore={"Learn more  →"}
                GooglePlayIcon={"media/images/googlePlayBadge.svg"}
                AppStoreIcon={"media/images/appstoreBadge.svg"}
            />
            <RightSection
                ImageUrl={"media/images/console.png"}
                Title={"Console"}
                Description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
                LearnMore={"Learn more  →"}
            />
            <LeftSection
                ImageUrl={"media/images/coin.png"}
                Title={"Coin"}
                Description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
                TryDemo={"Coin  →"}
                GooglePlayIcon={"media/images/googlePlayBadge.svg"}
                AppStoreIcon={"media/images/appstoreBadge.svg"}
            />
            <RightSection
                ImageUrl={"media/images/kiteconnect.png"}
                Title={"Kite Connect API"}
                Description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
                LearnMore={"Kite Connect →"}
            />
            <LeftSection
                ImageUrl={"media/images/varsity.png"}
                Title={"Varsity mobile"}
                Description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
                GooglePlayIcon={"media/images/googlePlayBadge.svg"}
                AppStoreIcon={"media/images/appstoreBadge.svg"}
            />

            <p className="text-center" style={{ fontSize: "1.4rem", marginTop: "6rem", marginBottom: "8rem" }}>Want to know more about our technology stack? Check out the
                <a href="" style={{ textDecoration: "none", color: "#387ED1" }}> Zerodha.tech</a> blog.</p>

            <Universe />
        </div>
    );
}

export default ProductPage;