import  { useState, useEffect, useMemo } from "react";

const Hero = () => {
  // Memoize the were array to prevent unnecessary re-renders
  const were = useMemo(() => [
    { were: "Link" },
    { were: "Click" },
    { were: "Join" },
    { were: "Download" },
  ], []); // Empty dependency array since it's static

  const [currentText, setCurrentText] = useState(were[0].were);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % were.length;
      setAnimationClass("opacity-0");
      setTimeout(() => {
        setCurrentText(were[index].were);
        setAnimationClass("opacity-100");
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [were]); // Now safe to include were in dependencies

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate__animated animate__fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          This is the Main Heading in My Website
        </h1>
        <p
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere
          alias tenetur natus, aliquid quod magni. Nihil quisquam laboriosam minus
          impedit quia repellendus, minima vel soluta pariatur tempora delectus,
          sint exercitationem eaque quam aspernatur nam.
        </p>
        <button
          className={`inline-block bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 animate__animated animate__fadeIn ${animationClass} transition-opacity duration-500`}
          style={{ animationDelay: "0.6s" }}
        >
          {currentText}
        </button>
      </div>
    </section>
  );
};

export default Hero;