import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './NavBar';

const testProducts = [
  {id: 0, name: 'Harddrive', price: 113},
  {id: 1, name: 'Smartphone', price: 116.3},
  {id: 2, name: 'Shampoo', price: 4.99},
  {id: 3, name: 'JBL-Speaker', price: 99},
]




function App() {
const [shoppingCart, setShoppingCart] = useState(testProducts);

function addShoppingCart (prevArray, newItem){
  const newCart = [...prevArray,newItem];
  setShoppingCart(newCart);
}
function emptyShoppingCart () {
  setShoppingCart([])
}

  return (
    <>
    <Navigation items={shoppingCart} />
      <div>
        <h1>Hello from the main page of the app!</h1>
        <div>
          <Link to="shop">Profile page</Link>
        </div>
        <div>
          <button onClick={() => addShoppingCart(shoppingCart, {id:5,name:'testname',price:8})}>Add to Cart</button>
          <button onClick={() => emptyShoppingCart()}>Remove all items from the shopping cart</button>
        </div>
      </div>
    </>
  );
}

export default App
