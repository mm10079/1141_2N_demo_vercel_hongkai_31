import { Outlet } from 'react-router-dom';
import NavbarShop_31 from '../../components/midterm/NavbarShop_31';
import Wrapper from '../../assets/wrappers/midterm/Shop_31';

const MidtermLayoutPage_31 = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <NavbarShop_31 />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default MidtermLayoutPage_31;
