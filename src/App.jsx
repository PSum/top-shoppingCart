import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Navigation from './NavBar';
import Shoppage from './Shoppage';
import Homepage from './Homepage';
import './styles/mainStyles.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const testProducts = [
  {id: uuidv4(), name: 'Harddrive', price: 113},
  {id: uuidv4(), name: 'Smartphone', price: 116.3},
  {id: uuidv4(), name: 'Shampoo', price: 4.99},
  {id: uuidv4(), name: 'JBL-Speaker', price: 99},
]
function App() {
const [shoppingCart, setShoppingCart] = useState([]);
const {name}= useParams();
const[fakeData, setFakeData] = useState([]);

useEffect(() =>{
  axios.get('https://fakestoreapi.com/products?limit=5').then(response => {
    setFakeData(response.data);
  })
  .catch(error =>{
    console.error(error);
  })
}, []);

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
        <Shoppage shoppingCart={shoppingCart} addShoppingCart={addShoppingCart} products={fakeData} emptyShoppingCart={emptyShoppingCart}></Shoppage>
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