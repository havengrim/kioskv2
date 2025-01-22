import Navbar from "@/components/Navbar";
import images from "@/assets/images";
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import Footer from "./components/footer";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { GrDocumentTime } from "react-icons/gr";
import { LuTimerReset } from "react-icons/lu";
import { GrDocumentUser } from "react-icons/gr";
import { AiOutlineFieldTime } from "react-icons/ai";
import ReactQRCode from 'react-qr-code';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import Typing from 'react-typing-effect';
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import Lottie from 'react-lottie';
import animationData from '@/assets/lottie.json';
import { RiArrowUpDoubleFill } from "react-icons/ri";

const Home = () => {
  const defaultOptions = {
    loop: true,  // Set to true if you want the animation to loop
    autoplay: true,  // Set to true to autoplay the animation
    animationData,  // The imported Lottie animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Keeps the aspect ratio of the animation
    },
  };
  const [selectedQRCode, setSelectedQRCode] = useState<string | null>(null);
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration
      once: true, // whether animations should happen only once
    });
  }, []);

  const forms = [
    {
      title: "Regular, Contractual, and Casual Application for Leave Form",
      description: "Submit leave applications easily for Regular, Contractual, and Casual employees.",
      icon: IoDocumentTextOutline,
      link: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Regular-Contractual-and-Casual-Application-for-Leave-Form.pdf",
    },
    {
      title: "Contract of Service Application for Leave",
      description: "Manage leave requests for contract-based employees seamlessly.",
      icon: HiOutlineDocumentText,
      link: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Contract-of-Service-Application-for-Leave-form.pdf",
    },
    {
      title: "Blank Daily Time Record",
      description: "Track and log daily attendance with customizable forms.",
      icon: GrDocumentTime,
      link: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Blank-Daily-Time-Record.pdf",
    },
    {
      title: "Overtime Annex C",
      description: "Submit and approve overtime requests efficiently.",
      icon: LuTimerReset,
      link: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Overtime-Annex-C.pdf",
    },
    {
      title: "Overtime Blank Form",
      description: "Customize and submit overtime details effortlessly.",
      icon: AiOutlineFieldTime,
      link: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Overtime-Blank-Form.pdf",
    },
    {
      title: "Personal Data Sheet",
      description: "View and download the personal data sheet for reference.",
      icon: GrDocumentUser,
      link: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/12/CS-Form-No.-212-Personal-Data-Sheet-revised.xlsx",
    },
  ];

  return (
    <div className="flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />


        {/* Hero Section */}
        <div
  className="flex flex-col lg:h-[32rem] lg:flex-row lg:items-center px-6 py-4 lg:py-16 space-y-6 lg:space-y-0 mt-10"
  style={{
    backgroundImage: `url(${images.bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Left Section */}
  <div className="container mx-auto lg:w-1/2 p-4">
    <div className="flex flex-col items-center lg:items-start lg:flex-row">
      {/* Navigation Buttons */}
      <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:flex-col lg:space-y-3 lg:mr-8">
        <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full focus:outline-none"></button>
        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full hover:bg-blue-500 focus:outline-none"></button>
        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full hover:bg-blue-500 focus:outline-none"></button>
        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full hover:bg-blue-500 focus:outline-none"></button>
      </div>

      {/* Text Content */}
      <div className="max-w-lg lg:order-2">
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-wide text-gray-800 dark:text-white">
          <Typing speed={100} eraseDelay={2000} text={['Welcome to HRMDD Kiosk']} className="text-gray-100 dark:text-gray-300" />
        </h1>
        <p className="mt-4 text-gray-100 dark:text-gray-300">
          Our HRMDD Kiosk streamlines workplace operations, offering intuitive access to HR forms, announcements, and employee management—all in one place.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex items-center justify-center w-full lg:w-1/2">
    <Lottie options={defaultOptions} height={400} width={400} />
  </div>
</div>



    <div className="container mx-auto p-4">
        {/* Section Cards */}
        <section>
        <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center mt-20">
          Most Requested Forms
        </h1>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
          {forms.map((form, index) => (
            <div key={index} className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="200">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <form.icon className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                {form.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{form.description}</p>
              <div className="flex gap-4 mt-4">
                <a href={form.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Form
                </a>
                  <div>
                    <Dialog>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setSelectedQRCode(form.link)}
                        className="text-blue-600 hover:underline"
                      >
                        Show QR Code
                      </button>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogTitle className="text-gray-800 dark:text-gray-300">QR Code for {form.title}</DialogTitle>
                      <DialogDescription>
                        <ReactQRCode value={selectedQRCode || ''} size={256} className="mx-auto border-4" />
                      </DialogDescription>
                      <DialogClose asChild>
                        <button className="mt-4 text-blue-600 hover:underline">Close</button>
                      </DialogClose>
                    </DialogContent>
                  </Dialog>
                  </div>
                </div>
              </div>
          ))}
        </div>
        </section>

        <div>
          <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center mt-20">
            Choose Section to Get the Latest Update
          </h1>
          <div className="grid grid-cols-4 gap-5">
            <a href="https://fo3.dswd.gov.ph/hrppms/">
              <Card
                style={{ backgroundImage: `url(${images.hrppms})` }}
                className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
              ></Card>
            </a>
            <a href="https://fo3.dswd.gov.ph/lds/">
              <Card
                style={{ backgroundImage: `url(${images.lds})` }}
                className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
              ></Card>
            </a>
            <a href="https://fo3.dswd.gov.ph/hrws/">
              <Card
                style={{ backgroundImage: `url(${images.hrws})` }}
                className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
              ></Card>
            </a>
            <a href="https://fo3.dswd.gov.ph/pas/">
              <Card
                style={{ backgroundImage: `url(${images.pas})` }}
                className="bg-cover bg-no-repeat h-32 cursor-pointer bg-center"
              ></Card>
            </a>
          </div>

          <section className="py-10 mt-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                  {/* Image Section */}
                  <div className="order-2 sm:order-1">
                    <img
                      src={images.risee}
                      alt="A representative image for Graduate School"
                      className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="order-1 sm:order-2">
                    <h3 className="font-extrabold text-3xl sm:text-4xl leading-tight text-gray-800 dark:text-gray-100">
                      RISE 2025: A Movement for Excellence
                    </h3>
                    <div className="flex flex-col gap-8 mt-6">
                      {/* Embrace Change */}
                      <div className="flex gap-4 items-start">
                        <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-600 text-white rounded-full shadow-lg">
                          <RiArrowUpDoubleFill className="h-8 w-8" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                            Embrace Change
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Be open to new ideas and ways of working.
                          </p>
                        </div>
                      </div>

                      {/* Challenge the Status Quo */}
                      <div className="flex gap-4 items-start">
                        <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-600 text-white rounded-full shadow-lg">
                          <RiArrowUpDoubleFill className="h-8 w-8" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                            Challenge the Status Quo
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Think creatively and explore innovative solutions.
                          </p>
                        </div>
                      </div>

                      {/* Pursue Excellence */}
                      <div className="flex gap-4 items-start">
                        <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-600 text-white rounded-full shadow-lg">
                          <RiArrowUpDoubleFill className="h-8 w-8" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                            Pursue Excellence
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Strive for the highest standards in everything we do.
                          </p>
                        </div>
                      </div>

                      {/* Lift Each Other */}
                      <div className="flex gap-4 items-start">
                        <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-600 text-white rounded-full shadow-lg">
                          <RiArrowUpDoubleFill className="h-8 w-8" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                            Lift Each Other
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Support and encourage one another in our pursuit of excellence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          {/* Vision Section */}
          <section className="py-24 bg">
            <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
              Mission and Vision of DSWD
            </h1>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                <div className="order-2  sm:order-2">
                  <img
                    src={images.cover2}
                    alt="A representative image for Graduate School"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="order-1  sm:order-1">
                  <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300">
                    Vision
                  </h3>
                  <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                    We envision a society where the poor, vulnerable and disadvantaged are empowered for an improved quality of life.
                    Towards this end, DSWD will be the world’s standard for the delivery of coordinated social services and social protection for poverty reduction by 2030.
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
                <div className="order-1  sm:order-1">
                  <img
                    src={images.cover3}
                    alt="A representative image for Graduate School"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="order-2  sm:order-2">
                  <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300">
                    Mission
                  </h3>
                  <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                    To develop, implement and coordinate social protection and poverty reduction solutions for and with the poor, vulnerable and disadvantaged.
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
