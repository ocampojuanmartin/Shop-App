import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
  return (
    <div>
      {admin && (
        <>
      <Topbar/>
        <Router>
        <div className="container">
        <SideBar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/users" element={<UserList/>} />
            <Route path="/user/:userId" element={<User/>} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/product/:productId" element={<Product/>} />
            <Route path="/newproduct" element={<NewProduct/>} />
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
        </Router>
        </>
        )}
    </div>
  );
}

export default App;
