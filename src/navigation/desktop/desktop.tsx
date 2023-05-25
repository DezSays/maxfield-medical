import { NavLink } from "react-router-dom";
import navs from "../../assets/json/navs.json";

const DesktopNavigation = () => {
    return (
        <nav className="nav nav--header y-wrap y-wrap--inner">
            <ul className="nav__navs">
                {navs.map((navItem) => (
                    <li key={navItem.href}>
                        <NavLink
                            className={navItem.activeClassName}
                            to={navItem.href}
                        >
                            {navItem.value}
                        </NavLink>
                    </li>
                ))}
               
            </ul>
        </nav>
    );
};

export default DesktopNavigation;
