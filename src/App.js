import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import DetailsService from "./components/DetailsService/DetailsService";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Signup from "./components/Signup/Signup";
import NotFound  from "./components/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import FaQ from "./components/FaQ/FaQ";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/faq">
              <FaQ></FaQ>
            </Route>
            <PrivateRoute exact path="/service/:serviceId">
              <DetailsService></DetailsService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
