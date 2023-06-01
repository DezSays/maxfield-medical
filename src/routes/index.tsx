import { Route, Routes } from 'react-router-dom';
import AboutUs from './aboutUs/aboutUs';
import ContactUs from './contactUs/contactUs';
import EmployerResources from './employerResources/employerResources';
import Forms from './forms/forms';
import InsuranceBilling from './insuranceBilling/insuranceBilling';
import Location from './location/location';
import Members from './members/members';
import UrgentCareServices from './urgentCareServices/urgentCareServices';
import Error from './error/error'
import FluCovidRSVTesting from './urgentCareServices/dropdown/fluCovidRSVTesting/fluCovidRSVTesting';
import SchoolSportsPhysicals from './urgentCareServices/dropdown/schoolSportsPhysicals/schoolSportsPhysicals';
import ServicesOffered from './urgentCareServices/dropdown/servicesOffered/servicesOffered';
import Telemedicine from './urgentCareServices/dropdown/telemedicine/telemedicine';
import UrgentCareVsER from './urgentCareServices/dropdown/urgentCareVsER/urgentCareVsER';
import Vaccines from './urgentCareServices/dropdown/vaccines/vaccines';
import Membership from './members/dropdown/membership/membership';
import InsuranceCarriers from './insuranceBilling/dropdown/insuranceCarriers/insuranceCarriers';
import PayMyBill from './insuranceBilling/dropdown/payMyBill/payMyBill';
import SelfPayPricing from './insuranceBilling/dropdown/selfPayPricing/selfPayPricing';
import Hippa from './forms/dropdown/hippa/hippa';
import PatientInfo from './forms/dropdown/patientInfo/patientInfo';
import DotPhysicals from './employerResources/dropdown/dotPhysicals/dotPhysicals';
import DrugTesting from './employerResources/dropdown/drugTesting/drugTesting';
import PreemploymentPhysicals from './employerResources/dropdown/preemploymentPhysicals/preemploymentPhysicals';
import WorkersComp from './employerResources/dropdown/workersComp/workersComp';

const View = (): JSX.Element => {

  return (
    <>
    <Routes>
      <Route path="/location" element={<Location />} />
      <Route path="/urgent-care-services" element={<UrgentCareServices />} />
      <Route path="/employer-resources" element={<EmployerResources />} />
      <Route path="/insurance-billing" element={<InsuranceBilling />} />
      <Route path="/members" element={<Members />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/flu-covid-rsv-testing" element={<FluCovidRSVTesting />} />
      <Route path="/school-sports-physicals" element={<SchoolSportsPhysicals />} />
      <Route path="/services-offered" element={<ServicesOffered />} />
      <Route path="/telemedicine" element={<Telemedicine />} />
      <Route path="/urgent-care-vs-er" element={<UrgentCareVsER />} />
      <Route path="/vaccines" element={<Vaccines />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/insurance-carriers" element={<InsuranceCarriers />} />
      <Route path="/pay-my-bill" element={<PayMyBill />} />
      <Route path="/self-pay-pricing" element={<SelfPayPricing />} />
      <Route path="/hippa" element={<Hippa />} />
      <Route path="/patient-info" element={<PatientInfo />} />
      <Route path="/dot-physicals" element={<DotPhysicals />} />
      <Route path="/drug-testing" element={<DrugTesting />} />
      <Route path="/preemployment-physicals" element={<PreemploymentPhysicals />} />
      <Route path="/workers-comp" element={<WorkersComp />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
};

export default View;