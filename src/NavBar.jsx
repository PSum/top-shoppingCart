import { Link } from 'react-router-dom'

export default function Navigation (props){
    return (
      <div>
        <div>
          <Link to="/">Home</Link>{" "}
        </div>
        <div>
          <Link to="/shop">Shoppage</Link>
        </div>
        <div>Number of items in Shopping Cart: {countItems(props.items)}</div>
      </div>
    );
}

function countItems (itemArray){
const numberItems = itemArray.length;
return numberItems;
}