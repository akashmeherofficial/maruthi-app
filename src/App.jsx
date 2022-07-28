import "./App.css";
import Home from "./Home/Home";
import {Routes, Route,} from 'react-router-dom'
import About from "./About/About";
import Products from "./Products/Products";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from "./components/Navbar/Navbar";
import ProductDesc from "./ProductDecs/ProductDesc";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/description" element={<ProductDesc/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
