
import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="min-h-[60vh] flex items-center justify-center ">
        {/* <span className="loading loading-dots loading-lg text-blue-500"></span> */}
        <div className="w-20 h-20 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-500"></div>
        {/* <span className="loading loading-dots loading-lg text-blue-500 "></span> */}
      </div>
    </div>
  );
}
