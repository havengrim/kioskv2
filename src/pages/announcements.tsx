import Sidebar from '@/components/sidebar'; // Import Sidebar
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Announcement = () => {
  // Example data for announcements
  const announcements = [
    { title: "New Academic Year", description: "The new academic year starts in September." },
    { title: "Extracurricular Activities", description: "Sign-ups for extracurricular activities are open." },
    { title: "Annual Science Fair", description: "The annual science fair is happening next month." },
    { title: "Holiday Schedule", description: "Check the holiday schedule for the upcoming semester." },
    { title: "Graduation Date", description: "The graduation ceremony will be held on May 15th." },
  ];

  // Function to get random image from Lorem Picsum
  const getRandomImage = () => {
    return `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="container mx-auto p-4 lg:pl-20">
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-800 mb-6">
          Announcements
        </h2>
        <p className="mb-10 text-center text-gray-700">
          Stay updated with the latest news and announcements from DSWD.
        </p>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={1} // Display 1 slide at a time
          centeredSlides={false} // Disable centering
          spaceBetween={30} // Space between slides
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 500, // Delay between slides (in ms)
            disableOnInteraction: false, // Don't disable autoplay on user interaction
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1, // Show 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // Show 2 slides on medium screens
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on large screens
            },
          }}
        >
          {announcements.map((announcement, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <img 
                  src={getRandomImage()} 
                  alt={`Announcement ${index + 1}`} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{announcement.title}</h3>
                <p className="text-gray-600">{announcement.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Announcement;
