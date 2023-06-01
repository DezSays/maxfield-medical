import React from 'react'
import FluCovidRSVTesting from './dropdown/fluCovidRSVTesting/fluCovidRSVTesting'
import SchoolSportsPhysicals from './dropdown/schoolSportsPhysicals/schoolSportsPhysicals'
import ServicesOffered from './dropdown/servicesOffered/servicesOffered'
import Telemedicine from './dropdown/telemedicine/telemedicine'
import UrgentCareVsER from './dropdown/urgentCareVsER/urgentCareVsER'
import Vaccines from './dropdown/vaccines/vaccines'

const UrgentCareServices = () => {

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <select onChange={handleDropdownChange}>
      <option disabled selected value="">
        Urgent Care Services
      </option>
        <option>
          Vaccines
        </option>

    </select>
  )
}

export default UrgentCareServices