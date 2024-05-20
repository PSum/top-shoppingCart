import './styles/mainStyles.css'
import { Link } from 'react-router-dom'

export default function Homepage (){
    return <div className='Homepage'><h2>Welcome to the homepage of the Shopping-Cart-Project of the odin project curriculum.</h2>
   <div>
   Jump to the <Link to='shop'>Shoppage</Link> to start shopping
    </div> 
    </div>
}