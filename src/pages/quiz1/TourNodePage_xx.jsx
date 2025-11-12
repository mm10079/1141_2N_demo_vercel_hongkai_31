import About_xx from '../../components/quiz1/About_xx';
import Footer_xx from '../../components/quiz1/Footer_xx';
import Hero_xx from '../../components/quiz1/Hero_xx';
import NavbarTour_xx from '../../components/quiz1/NavbarTour_xx';
import Services_xx from '../../components/quiz1/Services_xx';
import ToursFeatured_xx from '../../components/quiz1/ToursFeatured_xx';

import Wrapper from '../../assets/wrappers/quiz1/Tour_xx';

function TourPage_xx() {
  return (
    <Wrapper>
      <NavbarTour_xx />
      <Hero_xx />
      <About_xx />
      <Services_xx />
      <ToursFeatured_xx />
      <Footer_xx />
    </Wrapper>
  );
}

export default TourPage_xx;
