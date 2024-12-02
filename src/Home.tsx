import Sidebar from "@/components/sidebar";
import { Badge } from "@/components/ui/badge";
import images from "@/assets/images";
import { Card } from "@/components/ui/card";
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
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";


const Home = () => {
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
      <div className="container mx-auto p-4 pl-20">
        <h1 className="text-3xl font-semibold">Hello Welcome</h1>
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

        <div className="mt-5 flex">
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
            className="mySwiper rounded-md h-80 mb-20"
          >
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
        <div>
          <h1 className="text-2xl font-semibold text-center mb-6">
            Choose Section to Get the Latest Update
          </h1>
          <div className="grid grid-cols-4 gap-5">
            <Card
              style={{ backgroundImage: `url(${images.hrppms})` }}
              className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
            ></Card>
            <Card
              style={{ backgroundImage: `url(${images.lds})` }}
              className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
            ></Card>
            <Card
              style={{ backgroundImage: `url(${images.hrws})` }}
              className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
            ></Card>
            <Card
              style={{ backgroundImage: `url(${images.pas})` }}
              className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
            ></Card>
          </div>

          <section className="py-24">
            <h1 className="text-2xl font-semibold text-center mb-6">
              Mission and Vision of DSWD
            </h1>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                <div className="order-1 sm:order-1">
                  <img
                    src={images.hrppms}
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
                  <Button className="rounded-full mt-4 bg-[#630000] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center cursor-pointer">
                    Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                <div className="order-2 sm:order-2">
                  <img
                    src={images.hrppms}
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
                  <Button className="rounded-full mt-4 bg-[#630000] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                    Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
