import { Logo } from 'components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ activeMenu }) => {
  // react hooks
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    handleToggleClassShow();
    // eslint-disable-next-line
  }, [showMenu]);

  const bodyAddClass = (newClass) => {
    newClass.forEach((v) => {
      document.body.classList.add(v);
    });
  };

  const bodyRemoveClass = (newClass) => {
    newClass.forEach((v) => {
      document.body.classList.remove(v);
    });
  };

  const handleToggleClassShow = () => {
    if (showMenu) {
      bodyAddClass(['rm-scroll', 'show-menu']);
    } else {
      bodyRemoveClass(['rm-scroll', 'show-menu']);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__nav'>
          <Link className='header__logo' to='/'>
            <Logo className='header__logo__img' />
          </Link>
          <ul className='header__nav__menu'>
            <li className='header__nav__item'>
              <Link
                className={
                  activeMenu === 'home'
                    ? 'header__nav__link header__nav__link--active'
                    : 'header__nav__link'
                }
                to='/'>
                Home
              </Link>
            </li>
            <li className='header__nav__item'>
              <Link
                className={
                  activeMenu === 'doctor'
                    ? 'header__nav__link header__nav__link--active'
                    : 'header__nav__link'
                }
                to='/find-doctor'>
                Find a doctor
              </Link>
            </li>
            <li className='header__nav__item'>
              <Link
                className={
                  activeMenu === 'apps'
                    ? 'header__nav__link header__nav__link--active'
                    : 'header__nav__link'
                }
                to='/apps'>
                Apps
              </Link>
            </li>
            <li className='header__nav__item'>
              <Link
                className={
                  activeMenu === 'testimonials'
                    ? 'header__nav__link header__nav__link--active'
                    : 'header__nav__link'
                }
                to='/testimonials'>
                Testimonials
              </Link>
            </li>
            <li className='header__nav__item'>
              <Link
                className={
                  activeMenu === 'about'
                    ? 'header__nav__link header__nav__link--active'
                    : 'header__nav__link'
                }
                to='/about'>
                About us
              </Link>
            </li>
          </ul>
          <button
            className='burger-menu js-mobile-menu'
            type='button'
            onClick={toggleMenu}>
            <span className='burger-menu__bar'></span>
            <span className='burger-menu__bar'></span>
            <span className='burger-menu__bar'></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
