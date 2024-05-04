import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import Button from './Button';
import { useSelector } from 'react-redux';
import { getTotalcartQuantity } from '../features/cart/cartSlice';

function Header() {
  const totalcartQuantity = useSelector(getTotalcartQuantity);
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-cyan-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <div className='flex justify-center items-center space-x-4'>
      <Button to="/cart" type="small">{totalcartQuantity} Open Cart</Button>  
      <Username />
      </div>

    </header>
  );
}

export default Header;
