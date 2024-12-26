import { useState } from "react";
import { NavbarSimple } from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavbarSimple />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
