import { Link } from 'react-router-dom';
import './styles/mainStyles.css'

export default function Navigation (props){
    return (
      <div className="navbar">
          <Link to="/">Home</Link>{" "}
          <Link to="/shop">Shoppage</Link>
          <div>
            Number of items in Shopping Cart: {countItems(props.items)}
        </div>
      </div>
    );
}

function countItems (itemArray){
const numberItems = itemArray.length;
return numberItems;
}