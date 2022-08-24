import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 w-full">
        <Navbar />
        <main
          id="container"
          className="container mx-auto h-full overflow-y-auto"
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
