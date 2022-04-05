import {Article} from './Pages/Article'
import { Checkout } from './Pages/Checkout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Catalog } from './Pages/Catalog';
import { Calc } from './Pages/Calc';
import { Cart } from './Pages/Cart';
import { Cart_0 } from './Pages/Cart_0';
import { Category } from './Pages/Category';
import { ClassBeton } from './Pages/ClassBeton';
import { Home } from './Pages/Home';
import { OneArcticle } from './Pages/OneArcticle';
import { ProdCart } from './Pages/ProdCard';
import { Zakaz } from './Pages/Zakaz';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Cart_0/>}/>
        <Route path="/about" element={<Home/>}/>
        <Route path="/price" element={<Category/>}/>
        <Route path="/calc" element={<Calc/>}/>


        {/* <Route path="/about" element={<Checkout/>}/> */}
        <Route path="/basket" element={<Cart/>}/>
        <Route path="/catalog" element={<Catalog/>}/>

        <Route path="/arcticle" element={<Article/>}/>


        
      </Routes>
    </Router>   
    </div>
  );
}

export default App;
