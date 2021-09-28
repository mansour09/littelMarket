import React from "react";
import $ from "jquery";
import { useSelector } from "react-redux";

$(document).ready(function () {
  $(".text-s-green").click(function () {
    $(".fixed-top").animate({ width: "toggle" });
  });
});
function Header() {
  const counter = useSelector((state) => state.allaction.buycounter);
  return (
    <div>
      <div className="bg-white">
        <div className="container d-flex justify-content-between text-green text-big">
          <h3>عطاریاب</h3>
          <h3>خوش امدید</h3>
        </div>
      </div>

      <div className="bg-green">
        <div className="container navbar justify-content-end">
          <div className="order-4 mt-1 responsiv-nav-bar">
            <i className="btn rounded-circle bg-white text-s-green">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </i>
          </div>

          <div className="order-3 mt-1 ml-3 d-flex flex-row">
            <div className="order-1">
              <a href="/yourPurches" className="text-white h3">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
            </div>
            <div className="order-0 mt-2">
              <span className="badge bg-white rounded-circle">{counter}</span>
            </div>
          </div>
          <div className="order-2 shadow rounded text-white ml-3">
            {" "}
            09128594069 <i className="fa fa-phone" aria-hidden="true"></i>
          </div>
          <div className="order-1 ml-auto mt-3 responsiv-nav">
           <ul className=" d-flex flex-row ">
          <li className="nav-link">
            <a className="btn d-block bg-white pl-5 pr-5 text-green" href="/">
              خانه
            </a>
          </li>
          <li className="nav-link">
            <a className="btn bg-white pl-4 pr-4 text-green" href="/products">
              محصولات
            </a>
          </li>
          <li className="nav-link">
            <a className="btn d-block bg-white pl-4 pr-4 text-green" href="/callwithus">
              تماس با ما
            </a>
          </li>
        </ul>
        </div>
          <div className="order-0 ml-auto">
            <img
              className="navbar-brand rounded-circle"
              height="60px"
              width="50px"
              src="https://www.flowerwatch.com/assets/files/leader/rozen.jpg"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div
        className="positon-absolut fixed-top bg-dark ml-big responsiv-nav-bar"
        style={{ display: "none" }}
      >
        <ul>
          <li className="nav-link">
            <a className="btn d-block bg-white" href="/">
              خانه
            </a>
          </li>
          <li className="nav-link">
            <a className="btn d-block text-white" href="/products">
              محصولات
            </a>
          </li>
          <li className="nav-link">
            <a className="btn d-block text-white" href="/callwithus">
              تماس با ما
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
