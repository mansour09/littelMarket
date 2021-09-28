import "./App.css";
import React from "react";
import Header from "./states components/header-nav"; //this is fixed header
import Swiper from "./states components/swiper"; // our swiper in home url
import Homebody from "./states components/home body"; //description
import Footer from "./states components/footer.js";//fixed footer
import { Route, Switch } from "react-router";//for switching between our pages
import Products from "./states components/product-table-body"; // our products by useing axios
import YourPurches from "./states components/your-purches";// purches page for buy purches
import Call from "./states components/call-with-us-body";// call with us (page)
import Err404 from "./states components/404error-page";// erorr 404 page

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Swiper />
          <Homebody />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/yourPurches">
          <YourPurches />
        </Route>
        <Route path="/callwithus">
          <Call />
        </Route>
        <Route path="*">
        <Err404/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
