import React from 'react';
import mobile from '../assets/mobile.jpg';

export default function MobileSlider() {
  return (
    <div className="bg-gray-50 py-12 my-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-6 px-6 lg:px-12">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Your Hostel, Just a Tap Away!
          </h1>
          <p className="text-lg text-gray-600">
            Discover the easiest way to manage your hostel experience with our state-of-the-art mobile app. Tailored for both admins and residents, the app ensures convenience, speed, and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-start">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Real-Time Updates</h3>
                <p className="text-sm text-gray-600">
                  Instantly check room availability and stay updated.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-start">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Online Payments</h3>
                <p className="text-sm text-gray-600">
                  Pay your dues and fees seamlessly through the app.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-start">
              <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Push Notifications</h3>
                <p className="text-sm text-gray-600">
                  Get instant alerts for updates and announcements.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-start">
              <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Secure Access</h3>
                <p className="text-sm text-gray-600">
                  Role-based secure login for admins and residents.
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-6">Download the App</button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={mobile}
            className="max-w-full rounded-lg shadow-xl"
            alt="Mobile App Preview"
          />
        </div>
      </div>
    </div>
  );
}
