import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import navs from "../../assets/json/navs.json";
import FluCovidRSVTesting from '../../routes/urgentCareServices/dropdown/fluCovidRSVTesting/fluCovidRSVTesting';
import SchoolSportsPhysicals from '../../routes/urgentCareServices/dropdown/schoolSportsPhysicals/schoolSportsPhysicals';
import ServicesOffered from '../../routes/urgentCareServices/dropdown/servicesOffered/servicesOffered';
import Telemedicine from '../../routes/urgentCareServices/dropdown/telemedicine/telemedicine';
import UrgentCareVsER from '../../routes/urgentCareServices/dropdown/urgentCareVsER/urgentCareVsER';
import Vaccines from '../../routes/urgentCareServices/dropdown/vaccines/vaccines';
import Membership from '../../routes/members/dropdown/membership/membership';
import InsuranceCarriers from '../../routes/insuranceBilling/dropdown/insuranceCarriers/insuranceCarriers';
import PayMyBill from '../../routes/insuranceBilling/dropdown/payMyBill/payMyBill';
import SelfPayPricing from '../../routes/insuranceBilling/dropdown/selfPayPricing/selfPayPricing';
import Hippa from '../../routes/forms/dropdown/hippa/hippa';
import PatientInfo from '../../routes/forms/dropdown/patientInfo/patientInfo';
import DotPhysicals from '../../routes/employerResources/dropdown/dotPhysicals/dotPhysicals';
import DrugTesting from '../../routes/employerResources/dropdown/drugTesting/drugTesting';
import PreemploymentPhysicals from '../../routes/employerResources/dropdown/preemploymentPhysicals/preemploymentPhysicals';
import WorkersComp from '../../routes/employerResources/dropdown/workersComp/workersComp';



interface NavItem {
  href: string;
  activeClassName: string;
  value: string;
}



const DesktopNavigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState<string>("");
  const navigate = useNavigate();

  const toggleDropdown = (navItem: NavItem) => {
    if (selectedNavItem === navItem.value) {
      setDropdownOpen(!dropdownOpen);
    } else {
      setDropdownOpen(true);
    }
    setSelectedNavItem(navItem.value);
  };

  const navigateToDropdown = () => {
    navigate("/membership");
    setDropdownOpen(false);
  };

  const dropdownComponents: Record<string, JSX.Element> = {
    "Urgent Care Services": (
      <>
        <FluCovidRSVTesting />
        <SchoolSportsPhysicals />
        <ServicesOffered />
        <Telemedicine />
        <UrgentCareVsER />
        <Vaccines />
      </>
    ),
    "Employer Resources": (
      <>
        <DotPhysicals />
        <DrugTesting />
        <PreemploymentPhysicals />
        <WorkersComp />
      </>
    ),
    "Insurance & Billing": (
      <>
        <PayMyBill />
        <InsuranceCarriers />
        <SelfPayPricing />
      </>
    ),
    Members: (
      <>
        <Membership />
        <Telemedicine />
      </>
    ),
    Forms: (
      <>
        <Hippa />
        <PatientInfo />
      </>
    )
  };
  return (
    <nav className="nav nav--header y-wrap y-wrap--inner">
      <ul className="nav__navs">
        {navs.map((navItem: NavItem) => (
          <li key={navItem.href}>
            <NavLink
              className={navItem.activeClassName}
              to={navItem.href}
              onClick={() => toggleDropdown(navItem)}
            >
              {navItem.value}
            </NavLink>
            {dropdownOpen && navItem.value === selectedNavItem && (
              <div className="dropdown-content" onClick={navigateToDropdown}>
                {dropdownComponents[selectedNavItem]}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
