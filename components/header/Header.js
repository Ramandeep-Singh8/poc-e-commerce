import React from "react";
import { Nav, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { logout, selectUser } from "../../src/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    router.push("/");
  };
  console.log(user);
  return (
    <Nav className="w-100 navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Welcome</a>
        </Link>
        {user ? "" : <text className="navbar-brand">Please Signin</text>}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user ? (
          <div
            className="collapse navbar-collapse d-flex"
            id="navbarsExample07XL"
          >
            <ul className="navbar-nav mr-auto w-100">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">
                    {user?.role == "admin" ? "Add/Remove Products" : "Products"}
                  </a>
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link href="/">
                  <a className="nav-link">
                    {user?.role == "admin" ? "Notifications" : "Cart"}
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav px-3 ms-auto ">
              <li className="nav-item text-nowrap">
                <Button className="nav-link" onClick={(e) => handleClick(e)}>
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </Nav>
  );
}
