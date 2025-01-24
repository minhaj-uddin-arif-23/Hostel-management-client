import React from 'react'
import Payment from '../Dashboard/UserDashboard/Payment'
import { Helmet } from 'react-helmet'

export default function Gold() {
  return (
    <>
    <Helmet>
        <title>Hostel Management | Gold Package</title>
      </Helmet>
      <div className='w-11/12 mx-auto'>
          <div className='grid grid-cols-12'>
      <div className='grid col-span-6 ml-10 p-7 mt-10 bg-gray-50 rounded-lg shadow-md'>
  <h1 className='text-3xl font-bold text-gray-800 mb-4'>Gold Package</h1>
  <p className='text-lg text-gray-600 mb-4'>
    The Gold Package is a perfect balance of premium features and affordability, catering to individuals who value comfort and quality. It’s an ideal choice for professionals and students seeking advanced amenities without stretching their budget.
  </p>
  <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Features:</h2>
  <ul className='list-disc pl-5 text-gray-600'>
    <li className='mb-2'>✔️ Semi-Private Room with Comfortable Furniture</li>
    <li className='mb-2'>✔️ High-Speed Wi-Fi with Shared Bandwidth</li>
    <li className='mb-2'>✔️ Enhanced Meal Plan (3 meals/day with variety)</li>
    <li className='mb-2'>✔️ Weekly Housekeeping and Laundry Services</li>
    <li className='mb-2'>✔️ Access to Recreational Facilities (Gym, TV Lounge)</li>
    <li className='mb-2'>✔️ Priority Maintenance and Support Services</li>
  </ul>
  <h2 className='text-2xl font-semibold text-gray-700 mt-4 mb-2'>Why Choose the Gold Package?</h2>
  <p className='text-lg text-gray-600'>
    - Ideal for those who seek comfort and advanced services.<br />
    - Offers excellent value for money with premium features.<br />
    - A perfect mix of luxury and practicality, tailored for working professionals or students.
  </p>
  <p className='text-lg font-semibold text-gray-800 mt-4'>
    Starting at <span className='text-blue-600'>$100/month</span>, the Gold Package offers a premium experience at an affordable price.
  </p>
</div>

      <div className= ' ml-10 grid col-span-6'>
          <Payment plan="Gold Package" price={100} />
      </div>
    </div>
    </div>
    </>
  
  )
}
