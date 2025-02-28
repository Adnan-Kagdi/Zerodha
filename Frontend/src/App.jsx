import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import HomePage from './landing_page/Home/HomePage'
import AboutPage from './landing_page/About/AboutPage'
import ProductPage from './landing_page/Products/ProductPage'
import PricingPage from './landing_page/Pricing/PricingPage'
import SupportPage from './landing_page/Support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import Login from './landing_page/Signup/Login'
import Signup from './landing_page/Signup/Signup'
import './App.css'
import "./index.css"
import { AuthProvider } from "./authCotext"

function Layout() {
  const location = useLocation();

  const hideNavbarFooter = ["/signup", "/login"].includes(location.pathname);
  
  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;