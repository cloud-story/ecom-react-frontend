import Navbar from  "./components/Common/Navbar"
import Home from "./components/HOME/Home"
import Footer from "./components/Common/Footer.js"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Product from "./components/PDP/Product";
import ShoppingCart from "./components/Cart/ShoppingCart";
import CategoryPage from "./components/Category/CategoryPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/' 
            exact
            render={(props)=>(
              <>
               <Home/>
              </>
            )} />
       <Route path="/product/:id" component={Product} />
       <Route path="/cart" component={ShoppingCart} />
       <Route path="/category/:id" component={CategoryPage} />
      <Footer/>
    </Router>
  );
}

export default App;
