// import React from "react";
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import Header from "./components/header";
import Header2 from './components/header2'
import "./App.css";
import "./index.css";
import { APIURL } from "../src/helper/apiurl";
import { connect } from "react-redux";
import { userLoginRepeat, cartProduk, notifCart, userLoginn } from "./redux/actions";

// Tampilan User //
import Home from "./pages/home";
import Footer from "./components/footer";
import MenuAwal from "./components/menuawal";
import NotFound from "./components/notfound";
import { Switch, Route } from "react-router-dom";

import MenuRoadbike from "./pages/menuRoadbike";
import MenuMountain from "./pages/menuMountain";
import MenuBmx from "./pages/menuBmx";
import MenuDaily from "./pages/menuDaily";
import MenuEbike from "./pages/menuEbike";
import MenuApparels from "./pages/menuApparels";
import MenuSpareParts from './pages/menuSpareParts'
import MenuDetails from "./pages/menuDetails";
import MenuDetails2 from './pages/menuDetails2'
import MenuDetails3 from './pages/menuDetails3'
import MenuDetails4 from './pages/menuDetails4'
import MenuDetails5 from './pages/menuDetails5'
import MenuDetails6 from './pages/menuDetails6'
import MenuDetails7 from './pages/menuDetails7'
import RetailerStore from './pages/retailerStore'
import Notification from './pages/notification'

// User Controller //
import Cart from "./pages/cart";
import SignIn from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpass";
import CheckOut from './pages/checkout'
import PaginationTab from './components/pagination'
// Admin Controller //
import ManageAdmin from "./pages/manageAdmin";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(userLoginn())
    dispatch(userLoginRepeat())
    dispatch(cartProduk())
  }, [])

  return (
    <div>
      {/* <Header2 /> */}
      <Header />
      <Switch>
        <Route path={"/"} exact>
          <MenuAwal />
          <Home />
        </Route>

        {/* Tampilan User */}
        <Route exact path="/ganemu" component={NotFound} />
        {/* <Route exact path="/*" component={NotFound} /> */}

        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/menuroadbike"} component={MenuRoadbike} />
        <Route exact path={"/menumountain"} component={MenuMountain} />
        <Route exact path={"/menubmx"} component={MenuBmx} />
        <Route exact path={"/menudaily"} component={MenuDaily} />
        <Route exact path={"/menuebike"} component={MenuEbike} />
        <Route exact path={"/menuapparels"} component={MenuApparels} />
        <Route exact path={"/menuspareparts"} component={MenuSpareParts} />
        <Route exact path={"/menu-details/:detailId"} component={MenuDetails} />
        <Route exact path={"/menu-details2/:detailId"} component={MenuDetails2} />
        <Route exact path={"/menu-details3/:detailId"} component={MenuDetails3} />
        <Route exact path={"/menu-details4/:detailId"} component={MenuDetails4} />
        <Route exact path={"/menu-details5/:detailId"} component={MenuDetails5} />
        <Route exact path={"/menu-details6/:detailId"} component={MenuDetails6} />
        <Route exact path={"/menu-details7/:detailId"} component={MenuDetails7} />
        <Route exact path={'/cart/checkout'} component={CheckOut} />
        <Route exact path={'/pagination'} component={PaginationTab} />
        <Route exact path={'/retailerStore'} component={RetailerStore} />
        <Route exact path={'/notification'} component={Notification} />



        {/* User Controller */}
        <Route exact path={"/login"} component={SignIn} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/forgotpass"} component={ForgotPassword} />

        {/* Admin Controller */}
        <Route exact path={"/manageadmin"} component={ManageAdmin} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;

// class App extends Component {
//   state = {
//     loading: true
//   };

//   componentDidMount() {
//     var id = localStorage.getItem("userid");
//     if (id) {
//       axios
//         .get(`${APIURL}auth/userLoginn/${id}`)
//         .then(res => {
//           this.props.userLoginRepeat(res.data);
//           // this.props.cartProduk()
//         })
//         .catch(err => {
//           console.log(err);
//         });
//       this.props.cartProduk()
//     }
//     // this.props.notifCart()
//     this.setState({ loading: false });
//     // { this.props.loading }
//   }

//   render() {
//     var id = localStorage.getItem("userid");
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }
//     { this.props.cartProduk(id) }
//     // {
//     //   this.props.notifCart(this.props.cartProduk.length)
//     // }
//     return (
//       <div>
//         {/* <Header2 /> */}
//         <Header />
//         <Switch>
//           <Route path={"/"} exact>
//             <MenuAwal />
//             <Home />
//           </Route>

//           {/* Tampilan User */}
//           <Route exact path="/ganemu" component={NotFound} />
//           {/* <Route exact path="/*" component={NotFound} /> */}

//           <Route exact path={"/cart"} component={Cart} />
//           <Route exact path={"/menuroadbike"} component={MenuRoadbike} />
//           <Route exact path={"/menumountain"} component={MenuMountain} />
//           <Route exact path={"/menubmx"} component={MenuBmx} />
//           <Route exact path={"/menudaily"} component={MenuDaily} />
//           <Route exact path={"/menuebike"} component={MenuEbike} />
//           <Route exact path={"/menuapparels"} component={MenuApparels} />
//           <Route exact path={"/menuspareparts"} component={MenuSpareParts} />
//           <Route exact path={"/menu-details/:detailId"} component={MenuDetails} />
//           <Route exact path={"/menu-details2/:detailId"} component={MenuDetails2} />
//           <Route exact path={"/menu-details3/:detailId"} component={MenuDetails3} />
//           <Route exact path={"/menu-details4/:detailId"} component={MenuDetails4} />
//           <Route exact path={"/menu-details5/:detailId"} component={MenuDetails5} />
//           <Route exact path={"/menu-details6/:detailId"} component={MenuDetails6} />
//           <Route exact path={"/menu-details7/:detailId"} component={MenuDetails7} />
//           <Route exact path={'/cart/checkout'} component={CheckOut} />
//           <Route exact path={'/pagination'} component={PaginationTab} />
//           <Route exact path={'/retailerStore'} component={RetailerStore} />



//           {/* User Controller */}
//           <Route exact path={"/login"} component={SignIn} />
//           <Route exact path={"/register"} component={Register} />
//           <Route exact path={"/forgotpass"} component={ForgotPassword} />

//           {/* Admin Controller */}
//           <Route exact path={"/manageadmin"} component={ManageAdmin} />
//         </Switch>
//         <Footer />
//       </div>
//     );
//   }
// }

// const MapStateToProps = state => {
//   return {
//     Login: state.auth.login,
//     loading: state.cartReducers.loading
//   };
// };

// export default connect(MapStateToProps, { userLoginRepeat, cartProduk, notifCart })(App);
