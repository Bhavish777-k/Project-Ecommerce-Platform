import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import { Helmet} from "react-helmet";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {title || "E Commerce App"}</title>
        <meta name="description" content={description || "MERN STACK PROJECT"} />
        <meta name="keywords" contents={keywords || "NODE REACT EXPRESS MONGODB"} />
        <meta name="author" content={author || "IIIT VADODARA"} />
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster /> 
        {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;