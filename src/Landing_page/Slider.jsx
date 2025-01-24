import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import slide1 from '../assets/slied1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [userInputs, setUserInputs] = useState({});
  const [submittedInputs, setSubmittedInputs] = useState({});

  const carouselSlides = [
    {
      img: slide1,
      text: "Discover the beauty of nature in its purest form.",
      description:
        "The Hotel Management System is a comprehensive solution designed to streamline hotel operations, enhance customer experiences, and improve overall efficiency.",
    },
    {
      img: slide2,
      text: "Feel the serenity of calm waters.",
      description:
        "The Hotel Management System is a comprehensive solution designed to streamline hotel operations, enhance customer experiences, and improve overall efficiency.",
    },
    {
      img:slide3,
      text: "Experience the energy of urban landscapes.",
      description:
        "The Hotel Management System is a comprehensive solution designed to streamline hotel operations, enhance customer experiences, and improve overall efficiency.",
    },
    {
      img: slide4,
      text: "Marvel at the colors of the setting sun.",
      description:
        "The Hotel Management System is a comprehensive solution designed to streamline hotel operations, enhance customer experiences, and improve overall efficiency.",
    },
    {
      img: slide3,
      text: "Journey through the peaceful forests.",
      description:
        "The Hotel Management System is a comprehensive solution designed to streamline hotel operations, enhance customer experiences, and improve overall efficiency.",
    },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselSlides.length - 1 : currentSlider - 1
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselSlides.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselSlides.length]
  );

  const handleInputChange = (e) => {
    setUserInputs({ ...userInputs, [currentSlider]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmittedInputs({
      ...submittedInputs,
      [currentSlider]: userInputs[currentSlider] || "",
    });
    toast.success("Input submitted: " + (userInputs[currentSlider] || ""));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 300000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden z-10">
      {/* Arrow Left */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        &lt;
      </button>

      {/* Arrow Right */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 z-50 right-3 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        &gt;
      </button>

      {/* Carousel Container */}
      <div
        className="ease-linear duration-500 flex transform-gpu"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {/* Slides */}
        {carouselSlides.map((slide, idx) => (
          <div
            key={idx}
            className="relative min-w-full h-60 sm:h-96 md:h-[540px]"
          >
            <img
              src={slide.img}
              className="w-full h-full object-cover"
              alt={`Slide ${idx + 1}`}
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/50 text-white">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center">
                {slide.text}
              </h2>
            </div>
            <div className="absolute inset-x-0 bottom-16 flex flex-col items-center gap-4 bg-black/50 text-white md:p-4 ">
              <p className="text-sm md:text-base text-center ">
                {slide.description}
              </p>
              <input
                type="text"
                value={userInputs[idx] || ""}
                onChange={handleInputChange}
                className=" max-x-sm p-2 rounded-lg text-black"
                placeholder="Add your comment..."
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
