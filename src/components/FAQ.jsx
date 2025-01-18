import React, { useState } from 'react'
import faq from '../assets/faq.jpg'
function FAQ() {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "How do I book a room?",
      description: 'To book a room, visit the "Room Booking" section on our website or app, select the room type, and complete the booking form. Once confirmed, you’ll receive a booking confirmation email.',
    },
    {
      title: "What facilities are included in the hostel?",
      description: "Our hostel provides facilities such as Wi-Fi, laundry services, 24/7 security, a common lounge, a fully-equipped kitchen, and study areas. For a detailed list, check our facilities page.",
    },
    {
      title: "What is your cancellation policy?",
      description: "Cancellations made at least 7 days prior to the check-in date will receive a full refund. For cancellations made later, a cancellation fee may apply. Refer to our cancellation policy page for more information.",
    },
    {
      title: "Can I change my allocated room after check-in?",
      description: "Room changes are allowed depending on availability. Please contact the hostel administration and submit a request to change your room.",
    },
    {
      title: "Are there any discounts for long-term stays?",
      description: "Yes, we offer special discounts for guests staying longer than 3 months. Contact our support team for details on long-term stay packages.",
    },
    {
      title: "What are the check-in and check-out times?",
      description: "Check-in starts at 2 PM, and check-out is by 11 AM. Early check-in or late check-out may be possible, subject to availability and additional charges.",
    },
    {
      title: "Are meals included in the hostel fee?",
      description: "Meals are not included in the base fee. However, we offer optional meal plans that you can subscribe to. Visit the dining section on our website for more details.",
    },
    {
      title: "Is parking available at the hostel?",
      description: "Limited parking spaces are available for an additional fee. Please contact us in advance to reserve a spot.",
    },
  ];
  
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
  };
  return (
    <div>
      <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={faq}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <div className="mx-auto w-full max-w-[500px] rounded-lg">
            {dataArr.map((PerAccordion, idx) => (
                <div key={idx} className="my-2 rounded-lg border bg-white p-3 py-3 *:mix-blend-difference dark:border-zinc-200 ">
                    <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between font-medium text-white outline-none">
                        <span>{PerAccordion.title}</span>
                        <span className="rounded-full">
                            <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                            </svg>
                        </span>
                    </button>
                    <div className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default FAQ