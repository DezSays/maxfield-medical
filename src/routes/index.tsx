import { Route, Routes } from 'react-router-dom';
import AboutUs from './aboutUs/aboutUs';
import ContactUs from './contactUs/contactUs';
import EmployerResources from './employerResources/employerResources';
import Forms from './forms/forms';
import InsuranceBilling from './insuranceBilling/insuranceBilling';
import Location from './location/location';
import Members from './members/members';
import UrgentCareServices from './urgentCareServices/urgentCareServices';
import App from '../app';

const View = (): JSX.Element => {

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/location" element={<Location />} />
      <Route path="/urgent-care-services" element={<UrgentCareServices />} />
      <Route path="/employer-resources" element={<EmployerResources />} />
      <Route path="/insurance-billing" element={<InsuranceBilling />} />
      <Route path="/members" element={<Members />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default View;