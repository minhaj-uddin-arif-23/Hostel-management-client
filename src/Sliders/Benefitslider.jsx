import React from 'react';
import one from '../assets/benefitse.jpg';

export default function Benefitslider() {
  return (
    <div className="my-12">
      <div
        className="hero min-h-screen p-4 border rounded-lg hover:shadow-lg transition-shadow "
       
      >
        <div className="hero-content flex-col lg:flex-row">
          {/* Image Section */}
          <img
            src={one}
            className="max-w-md h-96 rounded-lg shadow-2xl"
            alt="Hostel Management"
          />

          {/* Text Section */}
          <div className="lg:pl-12">
            <h1 className="text-5xl font-bold flex items-center">
              <span>Why Choose Us?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 ml-3 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </h1>
            <p className="py-6">
              Discover the exceptional benefits of our hostel management system:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time tracking of room availability and allocation.</li>
              <li>Streamlined student registration and record-keeping.</li>
              <li>Seamless payment processing and transaction history.</li>
              <li>Automated notifications for dues and updates.</li>
              <li>Improved security with detailed resident profiles.</li>
              <li>Comprehensive reporting and analytics tools.</li>
            </ul>
            <button className="btn btn-primary mt-6">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
