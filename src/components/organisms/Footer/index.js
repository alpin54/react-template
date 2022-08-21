import { Logo } from 'components';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__menu js-footer-accordion'>
          <div className='footer__menu__item'>
            <h3 className='footer__title'>Company</h3>
            <ul className='footer__nav'>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='about.html'>
                  About
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='testimonials.html'>
                  Testimonials
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='find-doctor.html'>
                  Find a doctor
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='apps.html'>
                  Apps
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__menu__item'>
            <h3 className='footer__title'>Region</h3>
            <ul className='footer__nav'>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='indonesia.html'>
                  Indonesia
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='singapure.html'>
                  Singapure
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='hongkong.html'>
                  Hongkong
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='canada.html'>
                  Canada
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__menu__item'>
            <h3 className='footer__title'>Help</h3>
            <ul className='footer__nav'>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='help.html'>
                  Help Center
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='contact.html'>
                  Contact Support
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='Intructions.html'>
                  Intructions
                </a>
              </li>
              <li className='footer__nav__item'>
                <a className='footer__nav__link' href='how-it-works.html'>
                  How it works
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__about'>
          <a className='footer__logo' href='index.html'>
            <Logo className='footer__logo__img' name='trafalgar-text' />
          </a>
          <p className='footer__description'>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className='footer__copyright'>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
