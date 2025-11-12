import Wrapper from '../../assets/wrappers/quiz1/Tour_xx';
import { Link } from 'react-router-dom';

// import { FaGithub } from 'react-icons/fa6';
import { FaMap } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';
import { FaSocks } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSquarespace } from 'react-icons/fa';

const TourStaticPage2_xx = () => {
  return (
    <Wrapper>
      <div className='quiz1'>
        <nav className='navbar'>
          <div className='nav-center'>
            <div className='nav-header'>
              <img
                src='/images/quiz1/logo.svg'
                className='nav-logo'
                alt='backroads'
              />
              <button type='button' className='nav-toggle' id='nav-toggle'>
                <FaBars />
              </button>
            </div>
            <ul className='nav-links' id='nav-links'>
              <li>
                <Link to='/' className='nav-link'>
                  {' '}
                  TKUdemo{' '}
                </Link>
              </li>
              <li>
                <Link to='#home' className='nav-link'>
                  {' '}
                  home{' '}
                </Link>
              </li>

              <li>
                <Link to='#about' className='nav-link'>
                  {' '}
                  about{' '}
                </Link>
              </li>

              <li>
                <Link to='#services' className='nav-link'>
                  {' '}
                  services{' '}
                </Link>
              </li>

              <li>
                <Link to='#tours' className='nav-link'>
                  {' '}
                  tours
                </Link>
              </li>
            </ul>

            <ul className='nav-icons flex justify-center items-center gap-3 pt-8'>
              <li>
                <Link
                  to='https://www.twitter.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  to='https://www.twitter.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to='https://www.twitter.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <FaSquarespace />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section className='hero' id='home'>
          <div className='hero-banner'>
            <h1>continue exploring</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo debitis est autem dicta.
            </p>
            <Link to='#tours' className='btn hero-btn'>
              explore tours
            </Link>
          </div>
        </section>
        <section className='section' id='about'>
          <div className='section-title'>
            <h2>
              about <span>us</span>
            </h2>
          </div>

          <div className='section-center about-center'>
            <div className='about-img'>
              <img
                src='/images/quiz1/about.jpeg'
                className='about-photo'
                alt='awesome beach'
              />
            </div>
            <article className='about-info'>
              <h3>explore the difference</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur quisquam harum nam cumque temporibus explicabo
                dolorum sapiente odio unde dolor?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur quisquam harum nam cumque temporibus explicabo
                dolorum sapiente odio unde dolor?
              </p>
              <Link to='#' className='btn'>
                read more
              </Link>
            </article>
          </div>
        </section>
        <section className='section services' id='services'>
          <div className='section-title'>
            <h2>
              our <span>services</span>
            </h2>
          </div>
          <div className='section-center services-center'>
            <article className='service'>
              <span className='service-icon'>
                {/* <i className='fas fa-wallet fa-fw'></i> */}
                <FaWallet size={40} className='m-2' />
              </span>
              <div className='service-info'>
                <h4 className='service-title'>saving money</h4>
                <p className='service-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>

            <article className='service'>
              <span className='service-icon'>
                {/* <i className='fas fa-tree fa-fw'></i> */}
                <FaTree size={40} className='m-2' />
              </span>
              <div className='service-info'>
                <h4 className='service-title'>endless hiking</h4>
                <p className='service-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>

            <article className='service'>
              <span className='service-icon'>
                {/* <i className='fas fa-socks fa-fw'></i> */}
                <FaSocks size={40} className='m-2' />
              </span>
              <div className='service-info'>
                <h4 className='service-title'>amazing comfort</h4>
                <p className='service-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className='section' id='tours'>
          <div className='section-title'>
            <h2>
              featured <span>tours</span>
            </h2>
            <h4>static blogs -- htchung, 12345678 </h4>
          </div>

          <div className='section-center featured-center'>
            <article className='tour-card'>
              <div className='tour-img-container'>
                <img
                  src='/images/quiz1/tour-1.jpeg'
                  className='tour-img'
                  alt=''
                />
                <p className='tour-date'>august 26th, 2020</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>Tibet Adventure</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className='tour-footer'>
                  <p>
                    <span className='flex items-center justify-center gap-1.5'>
                      <FaMap /> china
                    </span>{' '}
                  </p>
                  <p>6 days</p>
                  <p>from $2100</p>
                </div>
              </div>
            </article>

            <article className='tour-card'>
              <div className='tour-img-container'>
                <img
                  src='/images/quiz1/tour-2.jpeg'
                  className='tour-img'
                  alt=''
                />
                <p className='tour-date'>october 1th, 2020</p>
              </div>
              <div className='tour-info'>
                <h4>best of java</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className='tour-footer'>
                  <p>
                    <span className='flex items-center justify-center gap-1.5'>
                      <FaMap /> indonesia
                    </span>{' '}
                  </p>
                  <p>11 days</p>
                  <p>from $1400</p>
                </div>
              </div>
            </article>

            <article className='tour-card'>
              <div className='tour-img-container'>
                <img
                  src='/images/quiz1/tour-3.jpeg'
                  className='tour-img'
                  alt=''
                />
                <p className='tour-date'>september 15th, 2020</p>
              </div>
              <div className='tour-info'>
                <h4>explore hong kong</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className='tour-footer'>
                  <p>
                    <span className='flex items-center justify-center gap-1.5'>
                      <FaMap /> hong kong
                    </span>{' '}
                  </p>
                  <p>8 days</p>
                  <p>from $5000</p>
                </div>
              </div>
            </article>

            <article className='tour-card'>
              <div className='tour-img-container'>
                <img
                  src='/images/quiz1/tour-4.jpeg'
                  className='tour-img'
                  alt=''
                />
                <p className='tour-date'>december 5th, 2019</p>
              </div>
              <div className='tour-info'>
                <h4>kenya highlights</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className='tour-footer'>
                  <p>
                    <span className='flex items-center justify-center gap-1.5'>
                      <FaMap /> kenya
                    </span>{' '}
                  </p>
                  <p>20 days</p>
                  <p>from $3300</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <footer class='section footer'>
          <ul class='footer-links'>
            <li>
              <Link to='/' class='footer-link'>
                TKUdemo
              </Link>
            </li>
            <li>
              <Link to='#home' class='footer-link'>
                home
              </Link>
            </li>
            <li>
              <Link to='#about' class='footer-link'>
                about
              </Link>
            </li>
            <li>
              <Link to='#services' class='footer-link'>
                services
              </Link>
            </li>
            <li>
              <Link to='#featured' class='footer-link'>
                featured
              </Link>
            </li>
          </ul>
          <ul className='nav-icons flex justify-center items-center gap-3'>
            <li>
              <Link
                to='https://www.twitter.com'
                target='_blank'
                className='nav-icon'
              >
                <FaFacebook size={30} />
              </Link>
            </li>
            <li>
              <Link
                to='https://www.twitter.com'
                target='_blank'
                className='nav-icon'
              >
                <FaXTwitter size={30} />
              </Link>
            </li>
            <li>
              <Link
                to='https://www.twitter.com'
                target='_blank'
                className='nav-icon'
              >
                <FaSquarespace size={30} />
              </Link>
            </li>
          </ul>
          <p class='copyright'>
            copyright &copy; Backroads travel tours company
            <span id='date'></span> all rights reserved
          </p>
        </footer>
      </div>
    </Wrapper>
  );
};
export default TourStaticPage2_xx;
