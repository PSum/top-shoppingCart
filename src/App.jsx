import { useState } from 'react'
import { useParams } from "react-router-dom";
import Navigation from './NavBar';
import Shoppage from './Shoppage';
import Homepage from './Homepage';
import './styles/mainStyles.css'

const testProducts = [
  {id: 0, name: 'Harddrive', price: 113},
  {id: 1, name: 'Smartphone', price: 116.3},
  {id: 2, name: 'Shampoo', price: 4.99},
  {id: 3, name: 'JBL-Speaker', price: 99},
]
function App() {
const [shoppingCart, setShoppingCart] = useState(testProducts);
const {name}= useParams();

function addShoppingCart (prevArray, newItem){
  const newCart = [...prevArray,newItem];
  setShoppingCart(newCart);
}
function emptyShoppingCart () {
  setShoppingCart([])
}

  return (
    <div className='content'>
    <Navigation items={shoppingCart} />
      {name === 'shop' ? (
        <Shoppage></Shoppage>
      ) : (<Homepage></Homepage>)}
    </div>
  );
}

export default App

      // <main>
      //   <h1>Hello from the main page of the app!</h1>
      //   <div>
      //     <Link to={{pathname: "shop", state: shoppingCart}}>Profile page</Link>
      //   </div>
      //   <div>
      //     <button onClick={() => addShoppingCart(shoppingCart, {id:5,name:'testname',price:8})}>Add to Cart</button>
      //     <button onClick={() => emptyShoppingCart()}>Remove all items from the shopping cart</button>
      //   </div>
      // </main>