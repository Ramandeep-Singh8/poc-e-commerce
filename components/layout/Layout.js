import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../../src/features/user/userSlice";
function Layout({ children }) {
  const user = useSelector(selectUser);

  return (
    <div className="container">
      {user ? (
        <>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </>
      ) : (
        <>
          <Content>{children}</Content>
        </>
      )}
    </div>
  );
}

export default Layout;
