import { MouseEventHandler, useState } from 'react';
import { NavLink } from 'react-router-dom';
import navs from '../../assets/json/navs.json';
import './flyoutMenu.scss';
import { GiHamburgerMenu } from "react-icons/gi"

interface FlyoutMenuProps {
  handleMobileNav: MouseEventHandler<HTMLAnchorElement>;
  isShowMobileNav: boolean;
}

interface NavItem {
  value: string;
  activeClassName?: string;
  href: string;
  dropdownItems?: NavItem[];
}

const FlyoutMenu: React.FC<FlyoutMenuProps> = ({
  handleMobileNav,
  isShowMobileNav,
}: FlyoutMenuProps): JSX.Element => {
  const [expandedNavs, setExpandedNavs] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleNavClick = (navValue: string) => {
    if (expandedNavs.includes(navValue)) {
      setExpandedNavs((prevState) => prevState.filter((value) => value !== navValue));
    } else {
      setExpandedNavs((prevState) => [...prevState, navValue]);
    }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const renderNav = (nav: NavItem): JSX.Element => {
    const isExpanded = expandedNavs.includes(nav.value);
    const hasDropdown = nav.dropdownItems && nav.dropdownItems.length > 0;

    const navClassNames = [
      nav.activeClassName,
      hasDropdown && isExpanded ? 'expanded' : '',
    ].join(' ');

    return (
      <li key={nav.value.toLowerCase()}>
        <NavLink
          className={navClassNames}
          onClick={() => handleNavClick(nav.value)}
          to={nav.href}
        >
          {nav.value}
        </NavLink>
        {hasDropdown && isExpanded && (
          <ul>
            {nav.dropdownItems!.map((dropdownItem, index) => (
              <li key={`${dropdownItem.value.toLowerCase()}-${index}`}>
                <NavLink
                  className={dropdownItem.activeClassName}
                  key={`${dropdownItem.value.toLowerCase()}-${index}`}
                  onClick={handleMobileNav}
                  to={dropdownItem.href}
                >
                  {dropdownItem.value}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  const renderedNavs = navs.map((nav) => renderNav(nav));

  return (
    <>
      {isShowMobileNav && isMenuOpen && (
        <nav className="flyout-menu">
          <div className="flyout-menu__close" onClick={handleCloseMenu}>
            X
          </div>
          <div className="flyout-menu__body">
            <ul className="nav__navs nav__navs--flyout-menu">{renderedNavs}</ul>
          </div>
          <div className="flyout-menu__footer">
            <span>154 Reagan Road</span>
            <span>Brunswick, GA 31525</span>
            <span>912-275-8495</span>
          </div>
        </nav>
      )}

      {isShowMobileNav && isMenuOpen === false && (
        <nav>
          <GiHamburgerMenu onClick={handleOpenMenu} />
        </nav>
      )}
    </>
  );
};

export default FlyoutMenu;
