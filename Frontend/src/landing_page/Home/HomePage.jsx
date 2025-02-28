import Hero from './Hero';
import Awards from "./Awards"
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount"
import { ToastContainer } from 'react-toastify';

function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <ToastContainer />
        </>
    );
}

export default HomePage;