import Sidebar from "@/components/sidebar";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  // Array of image URLs
  const imageUrls = [
    "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg",
    "https://images.pexels.com/photos/209006/pexels-photo-209006.jpeg",
    "https://images.pexels.com/photos/3408749/pexels-photo-3408749.jpeg",
    "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg",
    "https://images.pexels.com/photos/1482183/pexels-photo-1482183.jpeg",
    "https://images.pexels.com/photos/1534742/pexels-photo-1534742.jpeg",
    "https://images.pexels.com/photos/355062/pexels-photo-355062.jpeg",
    "https://images.pexels.com/photos/233487/pexels-photo-233487.jpeg",
    "https://images.pexels.com/photos/4829648/pexels-photo-4829648.jpeg"
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl">Hello Welcome</h1>
        <div className="flex w-full justify-end gap-2">
          <Badge className="flex gap-2 p-2 bg-blue-500">
            Announcements
            <span className="bg-white text-gray-500 px-2 py-1 rounded-full">
              5
            </span>
          </Badge>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Swiper Carousel Section */}
        <div className="mt-5">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true} 
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-md h-80"
          >
            {/* Loop through the image URLs and create a SwiperSlide for each */}
            {imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <img
                  src={url}
                  alt={`Nature ${index + 1}`}
                  className="w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
