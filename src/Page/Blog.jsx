import React from "react";
import { Helmet } from "react-helmet";
import { FaPenFancy, FaClock, FaTags } from "react-icons/fa";

function Blog() {
  return (
    <div>
       <Helmet>
        <title> Hostel Management | Blog</title>
      </Helmet>
      <div>
        <section class="text-center mb-10">
          <h1 class="text-4xl font-bold text-gray-800">Hostel News & Insights</h1>
          <p class="text-gray-600 mt-4 text-lg">
            Discover insights, stories, and updates about hostel life and
            management.
          </p>
        </section>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Streamlining Hostel Management with Technology
          </h3>
          <p className="text-gray-700">
            Discover how technology can revolutionize your hostel management,
            from automated check-ins and online booking systems to smart room
            controls and data-driven insights.
          </p>
          <div className="flex items-center mt-4">
            <span className="text-blue-500 mr-2">Read More</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md my-4">
          <h3 className="text-xl font-semibold mb-4">
            Boosting Hostel Bookings with Online Platforms
          </h3>
          <p className="text-gray-700">
            Explore the power of online platforms in attracting guests and
            increasing bookings for your hostel. Learn about effective
            strategies for optimizing your online presence.
          </p>
          <div className="flex items-center mt-4">
            <span className="text-blue-500 mr-2">Read More</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md my-4">
          <h3 className="text-xl font-semibold mb-4">
            The Importance of Security in Hostel Management
          </h3>
          <p className="text-gray-700">
            Learn about essential security measures for hostels, including guest
            safety, property protection, and emergency preparedness.
          </p>
          <div className="flex items-center mt-4">
            <span className="text-blue-500 mr-2">Read More</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11-10 10m10-10V3m-10 10v3"
              ></path>
            </svg>
          </div>
        </div>
        {/* 4 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Creating a Positive Hostel Environment
          </h3>
          <p className="text-gray-700">
            Discover strategies for fostering a welcoming and enjoyable
            atmosphere for your guests, from friendly staff interactions to
            community-building activities.
          </p>
          <div className="flex items-center mt-4">
            <span className="text-blue-500 mr-2">Read More</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6M5 20h14"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* blog card */}

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 7H7v6h6V7z" />
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z"
                clip-rule="evenodd"
              />
            </svg>
            <h3 class="text-xl font-semibold ml-2">
              Essential Maintenance Tips
            </h3>
          </div>
          <p class="text-gray-700">
            Learn about essential maintenance tasks to keep your hostel in top
            condition, from regular inspections to emergency procedures.
          </p>
          <div className="rating my-3">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
          <div class="flex items-center mt-4">
            <a href="#" class="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>

        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V6a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 101.414-1.414L11 8.586z"
                clip-rule="evenodd"
              />
            </svg>
            <h3 class="text-xl font-semibold ml-2">Time Management Hacks</h3>
          </div>
          <p class="text-gray-700">
            Discover effective time management strategies to streamline hostel
            operations and enhance productivity.
          </p>
          <div className="rating my-3">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
          <div class="flex items-center mt-4">
            <a href="#" class="text-green-500 hover:underline">
              Read More
            </a>
          </div>
          
        </div>

        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.292 9.707a1 1 0 011.415 0L10 12.001l2.293-2.294a1 1 0 011.415 1.414l-3 3a1 1 0 01-1.415 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <h3 class="text-xl font-semibold ml-2">
              Enhancing Resident Satisfaction
            </h3>
          </div>
          <p class="text-gray-700">
            Explore actionable steps to create a positive living environment and
            improve resident satisfaction in your hostel.
          </p>
          <div className="rating my-3">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
          <div class="flex items-center mt-4">
            <a href="#" class="text-red-500 hover:underline">
              Read More
            </a>
          </div>
          
        </div>

        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 102 0V8a1 1 0 10-2 0v5z"
                clip-rule="evenodd"
              />
            </svg>
            <h3 class="text-xl font-semibold ml-2">Budget-Friendly Tips</h3>
          </div>
          <p class="text-gray-700">
            Learn how to manage hostel operations on a budget without
            compromising quality and resident satisfaction.
          </p>
          <div className="rating my-3">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
          </div>
          <div class="flex items-center mt-4">
            <a href="#" class="text-yellow-500 hover:underline">
              Read More
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Blog;
