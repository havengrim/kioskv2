import Sidebar from '@/components/sidebar'; // Import Sidebar
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Ensure autoplay CSS is also imported

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

const Announcement = () => {
  // Example data for announcements
  const announcements = [
    { title: "Pantawid Pamilya Program", description: "Applications for the Pantawid Pamilya program are now open. Apply today!" },
    { title: "Social Amelioration Program", description: "DSWD announces the release of aid for vulnerable families affected by the pandemic." },
    { title: "Kalahi-CIDSS", description: "The Kalahi-CIDSS program is supporting local communities to improve infrastructure and livelihood." },
    { title: "Tahanan ng Pagmamahal", description: "The Tahanan ng Pagmamahal centers are open for support and shelter to victims of abuse." },
    { title: "Child Protection Services", description: "Join the DSWD’s child protection program to ensure the welfare of children in your community." },
    { title: "Bayanihan Outreach", description: "The Bayanihan outreach program aims to distribute basic goods and services to remote areas." },
    { title: "Disaster Response & Relief", description: "DSWD is ready to provide immediate assistance to areas affected by natural disasters." },
    { title: "Senior Citizens Assistance", description: "The senior citizens’ assistance program will provide financial help to the elderly this month." },
    { title: "Early Childhood Care and Development", description: "DSWD promotes early childhood development initiatives to support families with young children." },
    { title: "Adoption and Foster Care Services", description: "Applications for adoption and foster care programs are now open for qualified families." },
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
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-800 mb-3">
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
            delay: 3000, // Delay between slides (in ms)
            disableOnInteraction: false, // Don't disable autoplay on user interaction
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay module here
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
              <div className="bg-gray-100 p-6 shadow-md rounded-lg">
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
