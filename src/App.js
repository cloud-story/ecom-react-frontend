import Navbar from  "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer.js"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Product from "./components/Product";

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
      <Footer/>
    </Router>
  );
}

export default App;
