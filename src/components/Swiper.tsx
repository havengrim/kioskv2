import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import images from "@/assets/images"; // Assuming images is an object or an array


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Assuming 'images' is an object or array imported correctly from "@/assets/images"
const imagesCover = [
  images.cse,  // Ensure 'images.cse' is a valid path or imported image
  images.arta,
  images.review,

];

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imagesCover.map((image, index) => (
          <SwiperSlide key={index}>
                  <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[50vh] xl:h-[50vh]" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
