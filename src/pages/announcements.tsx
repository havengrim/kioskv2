import Sidebar from '@/components/sidebar'; // Import Sidebar
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Ensure autoplay CSS is also imported
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import images from '@/assets/images';

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
        <section className="py-24">
            <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 text-center">
              Mission and Vision of DSWD
            </h1>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                <div className="order-1 sm:order-1">
                  <img
                    src={images.cover2}
                    alt="A representative image for Graduate School"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="order-2 sm:order-2">
                  <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                    Vision
                  </h3>
                  <p className="text-lg mt-4 leading-relaxed text-gray-600">
                    We envision a society where the poor, vulnerable and
                    disadvantaged are empowered for an improved quality of life.
                    Towards this end, DSWD will be the world’s standard for the
                    delivery of coordinated social services and social
                    protection for poverty reduction by 2030.
                  </p>
                  <Button className="rounded-full mt-4 bg-[#00008E] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center cursor-pointer">
                    Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-24">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                <div className="order-2 sm:order-2">
                  <img
                    src={images.cover3}
                    alt="A representative image for Graduate School"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="order-1 sm:order-1">
                  <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                    Mission
                  </h3>
                  <p className="text-lg mt-4 leading-relaxed text-gray-600">
                    To develop, implement and coordinate social protection and
                    poverty reduction solutions for and with the poor,
                    vulnerable and disadvantaged.
                  </p>
                  <Button className="rounded-full mt-4 bg-[#00008E] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                    Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

      </div>
    </div>
  );
};

export default Announcement;
