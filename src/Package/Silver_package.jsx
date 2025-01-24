import React from 'react';
import Payment from '../Dashboard/UserDashboard/Payment';
import { Helmet } from 'react-helmet';

export default function Silver_package() {
  return (
    <div>
      <Helmet>
        <title>Hostel Management | Silver Package</title>
      </Helmet>
      <div className='w-11/12 mx-auto'>
      <div className="grid grid-cols-12">
        {/* Left Section: Silver Package Description */}
        <div className="grid col-span-6 p-7 mt-4">
          <div className="grid col-span-8 p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Silver Package
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              The Silver Package is our most affordable plan, designed to cater to essential needs while maintaining quality and comfort. It’s perfect for students or individuals looking for a budget-friendly option without compromising basic amenities.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Features:
            </h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li className="mb-2">✔️ Shared Room with Comfortable Bed</li>
              <li className="mb-2">✔️ 24/7 High-Speed Wi-Fi Access</li>
              <li className="mb-2">✔️ Nutritious Basic Meal Plan (3 meals/day)</li>
              <li className="mb-2">✔️ Housekeeping Twice a Week</li>
              <li className="mb-2">✔️ Access to Common Area (TV, Lounge)</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">
              Why Choose the Silver Package?
            </h2>
            <p className="text-lg text-gray-600">
              - Affordable pricing for essential services.<br />
              - Ideal for students or professionals seeking a cost-effective solution.<br />
              - Maintains a balance between quality and budget, ensuring your comfort and satisfaction.
          </p>
            <p className="text-lg font-semibold text-gray-800 mt-4">
              Starting at just <span className="text-blue-600">$50/month</span>, the Silver Package is the perfect entry-level plan to meet your needs.
            </p>
          </div>
        </div>

        {/* Right Section: Payment System */}
        <div className="grid col-span-6">
          <Payment plan="Silver Package" price={50} />
        </div>
      </div>
    </div>
    </div>
  );
}
