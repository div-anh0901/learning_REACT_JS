import Topbar from "./componenets/TopBar/Topbar";
import Sidebar from "./componenets/sliderBar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/productList">
            <ProductList/>
          </Route>
          <Route path="/newProduct">
            <NewProduct/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
