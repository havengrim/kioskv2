import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import Sidebar from "@/components/sidebar"; // Your sidebar component

const Announcements = () => {
  // Typing the swiperRef to point to a Swiper instance or null
  const swiperRef = useRef<Swiper | null>(null); 
  const imageUrls = [
    "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg",
    "https://images.pexels.com/photos/209006/pexels-photo-209006.jpeg",
    "https://images.pexels.com/photos/3408749/pexels-photo-3408749.jpeg",
    "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg",
    "https://images.pexels.com/photos/1482183/pexels-photo-1482183.jpeg",
  ];

  useEffect(() => {
    // Scroll event listener to trigger autoplay on scroll up
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // User is scrolling up, trigger autoplay
        if (swiperRef.current) {
          swiperRef.current.swiper.autoplay.start(); // Now swiperRef has the correct type
        }
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex">
      {/* Sidebar with fixed width */}
      <div className="w-16">
        <Sidebar />
      </div>

      {/* Fullscreen Swiper taking the remaining space */}
      <div className="flex-grow h-screen">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          autoplay={{
            delay: 2500,  // Set autoplay delay (in ms)
            disableOnInteraction: true,  // Keep autoplay even after user interaction
          }}
          loop={true}  // Enables the infinite loop of slides
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, Autoplay]}
          className="h-full"
          ref={swiperRef} // Attach the ref to the Swiper component
        >
          {imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Announcements;
