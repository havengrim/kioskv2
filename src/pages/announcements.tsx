
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Ensure autoplay CSS is also imported
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import images from '@/assets/images';
import Navbar from '@/components/Navbar';


const Announcement = () => {
  // Example data for announcements
  const announcements = [
    { title: "", description: "We request you prompt cooperation in completing this requirement to ensure a smooth and efficient process." },
    { title: "Rise 2025: A Movement for Excellence", description: "We will refine and enhance our processes, ensuring faster, more efficient, and impactful service delivery." },
    { title: "10 - 2 HABIT MUSIC OF THE DAY", description: "Happy 2025! Every day at 10:00 AM and 2:00 PM, we will play music to remind you to stand up, take a short break from your tasks, and move your body. To make it more fun, you may take a video of your team members dancing in today's music. Here is the link for today’s music:" },
    { title: "", description: "We would like to invite everyone to attend the Autism Consciousness Talk happening on January 16, 2025 at 2:00PM via Google Meet; Autism Consciousness Talk Thursday, January 16 · 2:00pm Time zone: Asia/Manila Google Meet joining info Video call link: https://meet.google.com/jay-ucaq-dfc" },
    { title: "Magandang buhay!", description: "Please refer to the advisory below regarding the request for PVC and ARTA IDs for DSWD FO III personnel. Attached to this message is the updated link along with the corresponding QR code for your convenience and easy access. Thank you for your cooperation and understanding!" },
    { title: "We Care!", description: "The Human Resource Welfare Section (HRWS), in coordination with the Provincial Health Office of Pampanga, will be providing FREE FLU VACCINE to ALL DSWD Field Office 3 family members (2 per staff) on January 13 to 29, 2025 between 9am to 4pm at the Regional Office Clinic." },
    { title: "Orientation on the renewal", description: "The HRPPMS enjoins all COS and JO workers on the virtual orientation that will be conducted TOMORROW,  December 19, 2024 (Thursday), at 10:00 AM via this link: https://meet.google.com/fsc-zgme-dew." },
    { title: "Be an Angel in RED VEST!", description: "DSWD announces the release of aid for vulnerable families affected by the pandemic." },
    { title: "", description: "In connection with the May 12, 2025 National and Local Elections and BARMM Parliamentary Elections, may we remind you of the prohibited acts and corresponding periods as mentioned therein." },
    { title: "", description: "DSWD Field Office 3 aims to promote fairness and inclusion, break barriers and build futures through the Equal Employment Opportunity Principle." },
    { title: "STATEMENT OF ASSETS, LIABILITIES AND NET WORTH (SALN) ORIENTATION (BATCH 2)", description: "" },
    
  ];

  // Static images for announcements
  const announcementImages = [
    images.pas1,
    images.rise2025,
    images.habit,
    images.welfare,
    images.pas7,
    images.weCare,
    images.announcement1,
    images.announcement2,
    images.announcement4,
    images.announcement3,
    images.cs3
  ];

  return (
    <div className="flex flex-col min-h-screen  dark:bg-gray-900">
      {/* Sidebar */}
      <Navbar />

      {/* Main content */}
      <div className="container mx-auto p-4">
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-800 dark:text-gray-200 mb-3">
          Announcements
        </h2>
        <p className="mb-10 text-center text-gray-700 dark:text-gray-400">
          Stay updated with the latest news and announcements from HRMDD.
        </p>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={1} // Display 1 slide at a time
          centeredSlides={false} // Disable centering
          spaceBetween={30} // Space between slides
          coverflowEffect={{
            rotate: 50,
            stretch: -50,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 10000, // Delay between slides (in ms)
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
              <div className="bg-gray-100 dark:bg-gray-800 p-6 shadow-md rounded-lg">
                <img 
                  src={announcementImages[index % announcementImages.length]} 
                  alt={`Announcement ${index + 1}`} 
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-200">{announcement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{announcement.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <section className="py-24">
          <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
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
                <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300">
                  Vision
                </h3>
                <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                  We envision a society where the poor, vulnerable and
                  disadvantaged are empowered for an improved quality of life.
                  Towards this end, DSWD will be the world’s standard for the
                  delivery of coordinated social services and social
                  protection for poverty reduction by 2030.
                </p>
                <Button className="rounded-full mt-4 bg-[#00008E] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center cursor-pointer dark:bg-[#00008E] dark:text-white">
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
                <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300">
                  Mission
                </h3>
                <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                  To develop, implement and coordinate social protection and
                  poverty reduction solutions for and with the poor,
                  vulnerable and disadvantaged.
                </p>
                <Button className="rounded-full mt-4 bg-[#00008E] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center dark:bg-[#00008E] dark:text-white">
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
