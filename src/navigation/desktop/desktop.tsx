import { NavLink } from "react-router-dom";
import { useState } from "react";

import navs from "../../assets/json/navs.json";
import './desktop.scss';

interface NavItem {
  activeClassName: string;
  exact: boolean;
  href: string;
  isActive: boolean;
  order: number;
  value: string;
  dropdownItems?: NavItem[] | any[];
}

const DesktopNavigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (dropdownIndex: number) => {
    if (activeDropdown === dropdownIndex) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownIndex);
    }
  };

  return (
    <nav className="nav nav--header">
      <ul className="nav__navs">
        {navs.map((navItem: NavItem, index: number) => (
          <li key={navItem.href}>
            <NavLink
              className={navItem.activeClassName}
              to={navItem.href}
              onClick={() => handleDropdownToggle(index)}
            >
              {navItem.value}
            </NavLink>
            {navItem.dropdownItems && activeDropdown === index && (
              <ul className="nav__dropdown">
                {navItem.dropdownItems.map((dropdownItem: NavItem) => (
                  <li key={dropdownItem.href}>
                    <NavLink
                      className={dropdownItem.activeClassName}
                      to={dropdownItem.href}
                    >
                      {dropdownItem.value}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
       
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
