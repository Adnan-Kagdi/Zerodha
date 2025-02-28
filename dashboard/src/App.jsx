import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { AuthProvider } from "../../Frontend/src/authCotext"

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
