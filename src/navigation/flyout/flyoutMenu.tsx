import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import navs from '../../assets/json/navs.json';
import './flyoutMenu.scss';

interface FlyoutMenuProps {
  handleMobileNav: MouseEventHandler<HTMLAnchorElement>;
  isShowMobileNav: boolean;
}

const FlyoutMenu: React.FC<FlyoutMenuProps> = ({
  handleMobileNav,
  isShowMobileNav,
}: FlyoutMenuProps): JSX.Element => {
  const primaryNavs = navs.map((nav, index) => (
    <li key={`${nav.value.toLowerCase()}-${index}`}>
      <NavLink
        className={nav.activeClassName}
        key={`${nav.value.toLowerCase()}-${index}`}
        onClick={handleMobileNav}
        to={nav.href}
      >
        {nav.value}
      </NavLink>
    </li>
  ));

  return (
    <>
      {isShowMobileNav && (
        <nav className="flyout-menu">
          <div className="flyout-menu__body">
            <ul className="nav__navs nav__navs--flyout-menu">
              {primaryNavs}
            </ul>
          </div>
          <div className="flyout-menu__footer">
            <span>154 Reagan Road</span>
            <span>Brunswick, GA 31525</span>
            <span>912-275-8495</span>
          </div>
        </nav>
      )}
    </>
  );
};

export default FlyoutMenu;
