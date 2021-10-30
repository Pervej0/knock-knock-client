import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Shared/Header/Header";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import Footer from "./Components/Shared/Footer/Footer";
import OrderPlace from "./Components/Home/Compo/Product/Compo/OrderPlace";
import MyOrder from "./Components/User/MyOrder/MyOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageOrders from "./Components/User/ManageOrders/ManageOrders";
import AddProduct from "./Components/User/AddProduct/AddProduct";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute path="/products/:id">
            <OrderPlace />
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrder />
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
            <ManageOrders />
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
