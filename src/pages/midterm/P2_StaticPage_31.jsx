import Wrapper from '../../assets/wrappers/midterm/Shop_31';
import { Link } from 'react-router-dom';
import NavbarShop_31 from '../../components/midterm/NavbarShop_31';

const P2_StaticPage_31 = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <div class='homepage'>
          <div class='directory-menu'>
            <div class='menu-item'>
              <img
                class='background-image'
                src='/images/midterm/homepage/hats.png'
                alt=''
              />
              <Link to={'/midterm/hats_31'} class='content'>
                <h1 class='title'>HATS</h1>
                <span class='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div class='menu-item'>
              <img
                class='background-image'
                src='/images/midterm/homepage/jackets.png'
                alt=''
              />
              <a href='./jackets.html' class='content'>
                <h1 class='title'>JACKETS</h1>
                <span class='subtitle'>SHOP NOW</span>
              </a>
            </div>
            <div class='menu-item'>
              <img
                class='background-image'
                src='/images/midterm/homepage/sneakers.png'
                alt=''
              />
              <a href='./sneakers.html' class='content'>
                <h1 class='title'>SNEAKERS</h1>
                <span class='subtitle'>SHOP NOW</span>
              </a>
            </div>
            <div class='large menu-item'>
              <img
                class='background-image'
                src='/images/midterm/homepage/womens.png'
                alt=''
              />
              <a href='./womens.html' class='content'>
                <h1 class='title'>WOMENS</h1>
                <span class='subtitle'>SHOP NOW</span>
              </a>
            </div>
            <div class='large menu-item'>
              <img
                class='background-image'
                src='/images/midterm/homepage/mens.png'
                alt=''
              />
              <a href='./mens.html' class='content'>
                <h1 class='title'>MENS</h1>
                <span class='subtitle'>SHOP NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P2_StaticPage_31;
