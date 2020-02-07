import React from "react";
import Header from "./components/header";
import "./App.css";
import "./index.css";
import { APIURL } from "../src/helper/apiurl";

// Tampilan User //
import Home from "./pages/home";
import Footer from "./components/footer";
import MenuAwal from "./components/menuawal";
import NotFound from "./components/notfound";
// import CategoryBike from "./pages/category-bike";
import GearBike from "./pages/menuGear";
import Marchendise from "./pages/marchendise";
import { Switch, Route } from "react-router-dom";

import MenuRoadbike from "./pages/menuRoadbike";
import MenuMountain from "./pages/menuMountain";
import MenuBmx from "./pages/menuBmx";
import MenuDaily from "./pages/menuDaily";
import MenuEbike from "./pages/menuEbike";

// User Controller //
import Cart from "./pages/cart";
import SignIn from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpass";

// Admin Controller //
import ManageAdmin from "./pages/manageAdmin";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/"} exact>
          <MenuAwal />
          <Home />
        </Route>

        {/* Tampilan User */}
        <NotFound exact path={"/not-found"} component={NotFound} />
        {/* <Route exact path={"/category-bike"} component={CategoryBike} /> */}
        <Route exact path={"/gear-bike"} component={GearBike} />
        <Route exact path={"/marchendise"} component={Marchendise} />
        <Route exact path={"/menuroadbike"} component={MenuRoadbike} />
        <Route exact path={"/menumountain"} component={MenuMountain} />
        <Route exact path={"/menubmx"} component={MenuBmx} />
        <Route exact path={"/menudaily"} component={MenuDaily} />
        <Route exact path={"/menuebike"} component={MenuEbike} />
        <Route exact path={"/cart"} component={Cart} />

        {/* User Controller */}
        <Route exact path={"/login"} component={SignIn} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/forgotpass"} component={ForgotPassword} />

        {/* Admin Controller */}
        <Route exact path={"/manageadmin"} component={ManageAdmin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
