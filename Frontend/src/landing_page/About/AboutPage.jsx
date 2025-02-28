import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
    return (
        <div className="aboutContainer">
            <Hero />
            <Team />
        </div>
    );
}

export default AboutPage;