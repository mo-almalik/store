import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/common/TopNav";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CategoryNav from "../components/common/CategoryNav";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0">
      
      <div>
        <TopNav />
        <Navbar />
        <CategoryNav />
      </div>

      
      <main className="flex-1">
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
}

export default Layout;
