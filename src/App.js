import {Article} from './Pages/Article'
import { Basket } from './Pages/Basket';
import { Checkout } from './Pages/Checkout';

function App() {
  return (
    <div className="App">
      <Article/>
      <Checkout/>
      <Basket/>
    </div>
  );
}

export default App;
