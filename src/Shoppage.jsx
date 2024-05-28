import { v4 as uuidv4 } from 'uuid';

function ShowProducts (props){
const listItems = props.products.map(product => {
return (
<div key={uuidv4()} className="item">
  <h3>{product.title}</h3>
  <div>Price: {product.price}</div>
  <div className='description'>{product.description}</div>
  <button onClick={()=> props.addShoppingCart(props.shoppingCart, product)}>Add to Cart</button>
</div>
);
})
return <div className="items">{listItems}</div>
}


function ShoppingCart (props){
  const listItems = props.shoppingCart.map(item =>{
  return(
<div key={item.id}>
  <h3>{item.title}</h3>
  <div>{item.price}</div>
  <hr />
</div>
  )
})
  return(
    <div className='shoppingCart'>
      <h1>Shopping Cart</h1>
      <hr />
      <div>
{listItems}
      </div>
      <button onClick={props.emptyShoppingCart}>Remove items from shopping cart</button>
    </div>
  )
}

export default function Shoppage  (props)  {
  // console.log(props.products)
  return (
    <div className="Shoppage">
<ShowProducts className='showProducts' products={props.products} addShoppingCart={props.addShoppingCart} shoppingCart={props.shoppingCart}></ShowProducts>
      <ShoppingCart emptyShoppingCart={props.emptyShoppingCart} shoppingCart={props.shoppingCart}></ShoppingCart>
    </div>
  );
};