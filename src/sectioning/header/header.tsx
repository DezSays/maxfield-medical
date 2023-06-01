import React, { MouseEventHandler, useState } from 'react';
import DesktopNavigation from "../../navigation/desktop/desktop";
import FlyoutMenu from "../../navigation/flyout/flyoutMenu";
import { NavLink } from "react-router-dom";
import './header.scss';
import { HeaderProps } from '../../types/interface';


const Header: React.FC<HeaderProps> = ({ isMobileView }) => {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  console.log(isMobileView)

  const handleMobileNav: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = () => {
    setIsShowMobileNav(!isShowMobileNav);
  };

  return (
    <>
      <header className="border-lt">
        <div className={`y-wrap y-wrap--inner y-header-${isMobileView ? 'mobile' : 'desktop'}`}>
          <div className="nav__logo-container">
            <NavLink className="navs__active" to="/about-us">
              Logo
            </NavLink>
          </div>
          {isMobileView ? (
            <FlyoutMenu handleMobileNav={handleMobileNav} isShowMobileNav={true} />
          ) : (
            <DesktopNavigation />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
