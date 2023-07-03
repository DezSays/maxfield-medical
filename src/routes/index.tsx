import { Route, Routes } from 'react-router-dom';
import AboutUs from './aboutUs/aboutUs';
import ContactUs from './contactUs/contactUs';
import EmployerResources from './employerResources/employerResources';
import Forms from './forms/forms';
import InsuranceBilling from './insuranceBilling/insuranceBilling';
import Landing from './landing';
import Location from './location/location';
import Members from './members/members';
import UrgentCareServices from './urgentCareServices/urgentCareServices';
import Error from './error/error';
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
        <Route path="/" element={<Landing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/urgent-care-services" element={<UrgentCareServices />} />
        <Route path="/employer-resources" element={<EmployerResources />} />
        <Route path="/insurance-billing" element={<InsuranceBilling />} />
        <Route path="/members" element={<Members />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/urgent-care-services/services-offered" element={<ServicesOffered />} />
        <Route path="/urgent-care-services/flu-covid-rsv-testing" element={<FluCovidRSVTesting />} />
        <Route path="/urgent-care-services/vaccines" element={<Vaccines />} />
        <Route path="/urgent-care-services/urgent-care-vs-er" element={<UrgentCareVsER />} />
        <Route path="/urgent-care-services/school-sports-physicals" element={<SchoolSportsPhysicals />} />
        <Route path="/urgent-care-services/telemedicine" element={<Telemedicine />} />
        <Route path="/members/membership" element={<Membership />} />
        <Route path="/members/telemedicine" element={<Telemedicine />} />
        <Route path="/insurance-billing/pay-my-bill" element={<PayMyBill />} />
        <Route path="/insurance-billing/insurance-carriers" element={<InsuranceCarriers />} />
        <Route path="/insurance-billing/self-pay-pricing" element={<SelfPayPricing />} />
        <Route path="/forms/hippa" element={<Hippa />} />
        <Route path="/forms/patient-info" element={<PatientInfo />} />
        <Route path="/employer-resources/dot-physicals" element={<DotPhysicals />} />
        <Route path="/employer-resources/drug-testing" element={<DrugTesting />} />
        <Route path="/employer-resources/preemployment-physicals" element={<PreemploymentPhysicals />} />
        <Route path="/employer-resources/workers-comp" element={<WorkersComp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default View;
