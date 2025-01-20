import React from 'react';
import img1 from '../assets/room.png';
import img2 from '../assets/managment.png';
import img3 from '../assets/cctv.png';
import img4 from '../assets/diet.png';
import img5 from '../assets/verified-account.png';
import img6 from '../assets/maintanace.png';

function Card() {
  return (
    <div className="px-6 py-10 bg-gray-50/20 my-14">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Hostel Management Features</h2>
        <p className="text-gray-600">
          Streamline hostel operations with efficient management tools, enhanced student experiences, and a secure environment.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Room Allocation */}
        <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <img src={img1} alt="Room Allocation Icon" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 text-center">Room Allocation</h3>
          <p className="text-sm text-gray-600 text-center">
            Simplify the process of assigning rooms to students while tracking availability and preferences.
          </p>
        </div>

        {/* Facility Management */}
        <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <img src={img2} alt="Facility Management Icon" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 text-center">Facility Management</h3>
          <p className="text-sm text-gray-600 text-center">
            Ensure all amenities like Wi-Fi, laundry, and food services are efficiently managed and accessible.
          </p>
        </div>

        {/* Security System */}
        <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <img src={img3} alt="Security Icon" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 text-center">Security System</h3>
          <p className="text-sm text-gray-600 text-center">
            Implement robust security features, including visitor tracking, entry logs, and emergency alerts.
          </p>
        </div>

        {/* Food Services */}
        <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <img src={img4} alt="Food Services Icon" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 text-center">Food Services</h3>
          <p className="text-sm text-gray-600 text-center">
            Manage daily menus and ensure timely delivery of healthy meals to all residents.
          </p>
        </div>

        {/* Attendance Management */}
        <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <img src={img5} alt="Attendance Management Icon" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 text-center">Attendance Management</h3>
          <p className="text-sm text-gray-600 text-center">
            Automate student check-ins and maintain accurate attendance records for better oversight.
          </p>
        </div>

        {/* Maintenance Requests */}
        <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <img src={img6} alt="Maintenance Requests Icon" className="w-16 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 text-center">Maintenance Requests</h3>
          <p className="text-sm text-gray-600 text-center">
            Facilitate the submission and tracking of maintenance requests to address issues promptly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
