import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolling down more than 20px
      if (window.scrollY > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Hide button when at the top
      }
    };

    // Check initial scroll position on mount
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-1/2 right-3 z-50 p-4 text-lg text-white bg-blue-600 shadow-lg hover:bg-gray-700 transform transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`} // Applying transition for the left-to-right effect
      title="Go to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
