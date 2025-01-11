
import Sidebar from "@/components/sidebar";
import { Badge } from "@/components/ui/badge";
import images from "@/assets/images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./components/footer";

// Import your slide data from the JSON file
const slideData = [
  { image: images.slide1, title: "Slide 1 Title" },
  { image: images.slide2, title: "Slide 2 Title" },
  { image: images.slide3, title: "Slide 3 Title" },
  { image: images.slide4, title: "Slide 4 Title" },
  { image: images.slide5, title: "Slide 5 Title" },
];

const Home = () => {
  return (
    <div className="flex flex-col dark:bg-gray-900 dark:text-white">
      <Sidebar />
      <div className="container mx-auto p-4 pl-20">
        <div className="flex w-full justify-end gap-2">
          <Badge className="flex gap-2 p-2 bg-blue-500 dark:bg-blue-600 dark:text-white">
            Announcements
            <span className="bg-white text-gray-500 dark:bg-gray-700 dark:text-white px-2 py-1 rounded-full">
              5
            </span>
          </Badge>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        {/* Swiper Section */}
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
            className="mySwiper rounded-md h-[90vh] mb-20"
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                  {/* Uncomment below if you want to display the title on the image */}
                  {/* <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                    {slide.title}
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Section Cards */}
        <div>
          <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
            Choose Section to Get the Latest Update
          </h1>
          <div className="grid grid-cols-4 gap-5">
            <a href="/hrppms">
              <Card
                style={{ backgroundImage: `url(${images.hrppms})` }}
                className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
              ></Card>
            </a>
            <a href="/lds">
              <Card
                style={{ backgroundImage: `url(${images.lds})` }}
                className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
              ></Card>
            </a>
            <a href="/hrws">
              <Card
                style={{ backgroundImage: `url(${images.hrws})` }}
                className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
              ></Card>
            </a>
            <a href="/pas">
              <Card
                style={{ backgroundImage: `url(${images.pas})` }}
                className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
              ></Card>
            </a>
          </div>

          {/* Vision Section */}
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
                  <Button className="rounded-full mt-4 bg-[#00008E] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center cursor-pointer dark:bg-blue-700 dark:text-white">
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
                  <Button className="rounded-full mt-4 bg-[#00008E] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center dark:bg-blue-700  dark:text-white">
                    Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-24">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h3 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
                Core Values That Guide Our Mission
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <Card className="flex flex-col justify-center items-center dark:bg-gray-800">
                  <CardHeader>
                    <img src={images.value1} alt="respect" className="h-20 w-20" />
                  </CardHeader>
                  <CardContent>
                    <span className="font-semibold text-md dark:text-white">
                      Respect for Human Dignity
                    </span>
                  </CardContent>
                </Card>
                <Card className="flex flex-col justify-center items-center dark:bg-gray-800">
                  <CardHeader>
                    <img src={images.value2} alt="integrity" className="h-20 w-20" />
                  </CardHeader>
                  <CardContent>
                    <span className="font-semibold text-md dark:text-white">Integrity</span>
                  </CardContent>
                </Card>
                <Card className="flex flex-col justify-center items-center dark:bg-gray-800">
                  <CardHeader>
                    <img src={images.value3} alt="excellence" className="h-20 w-20" />
                  </CardHeader>
                  <CardContent>
                    <span className="font-semibold text-md dark:text-white">Excellence</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
