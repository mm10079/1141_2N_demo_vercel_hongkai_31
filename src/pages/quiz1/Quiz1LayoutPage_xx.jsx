import { Outlet } from 'react-router-dom';
import NavbarTour_xx from '../../components/quiz1/NavbarTour_xx';

const Quiz1LayoutPage_xx = () => {
  return (
    <>
      {/* <NavbarTour_xx /> */}
      <Outlet />
    </>
  );
};

export default Quiz1LayoutPage_xx;
