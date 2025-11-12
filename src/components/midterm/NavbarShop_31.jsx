import Wrapper from '../../assets/wrappers/midterm/Shop_31';
import { Link } from 'react-router-dom';

const NavbarShop_31 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <a href='/' className='logo-container'>
          <img src='/images/midterm/assets/crown.svg' />
        </a>
        <div className='options'>
          <Link to={'/'} className='nav-link'>
            TKUdemo
          </Link>
          <a href='./overview.html' className='option'>
            Shop
          </a>
          <a href='/shop' className='option'>
            Contact
          </a>
          <a href='/signin' className='option'>
            Sign In
          </a>
          <div className='cart-icon' onclick='cartToggle()'>
            <img
              className='shopping-icon'
              src='/images/midterm/assets/shopping-bag.svg'
              alt=''
            />
          </div>
          <div className='cart-dropdown'>
            <div className='cart-items'>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/QdJwgmp/brown-cowboy.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Brown Cowboy</span>
                  <span className='price'>4 * $35</span>
                </div>
              </div>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Blue Jean Jacket</span>
                  <span className='price'>1 * $90</span>
                </div>
              </div>
              <button className='custom-button'>GO TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavbarShop_31;
