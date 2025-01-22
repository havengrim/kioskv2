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

  const advisories = [
    { 
      text: 'Advisory 1: HR ADVISORY NO. 03 RE', 
      description: 'REGIONAL GUIDELINES ON FILLING UP OF COS', 
      url: 'https://fo3.dswd.gov.ph/wp-content/uploads/2024/12/HR-ADVISORY-NO.-03_Regional-Guidelines-on-Filling-Up-of-Contract-of-Service-COS-Positions.pdf' 
    },
    { 
      text: 'Advisory 2: HR ADVISORY NO. 02 RE.', 
      url: 'https://fo3.dswd.gov.ph/wp-content/uploads/2024/12/HR-ADVISORY-NO.-02-REGIONAL-GUIDELINES-STREAMLINING-OF-THE-RECRUITMENT-SELECTION-AND-PLACEMENT-PROCESS-FOR-VACANT-NON-CAREER-POSITIONS.pdf', 
      description: 'STREAMLINING RECRUITMENT FOR NON-CAREER POSITIONS' 
    },
    { 
      text: 'Advisory 3: LAUNCH OF ONLINE REQUEST FOR ELC', 
      description: 'HRMDD announces launch of Online Request Platform for ELC, effective July 8, 2024. Scan QR Code.', 
      url: 'https://fo3.dswd.gov.ph/wp-content/uploads/2024/08/HRMDD-MEMO-NO-59-2024_LAUNCH-OF-ONLINE-REQUEST-FOR-ELECTRONIC-LEAVE-CARDS-1.pdf' 
    },
    { 
      text: 'Advisory 4: OBSERVANCE OF LENTEN SEASON', 
      url: 'https://fo3.dswd.gov.ph/wp-content/uploads/2024/08/HRMDD-MEMO-NO.-23-2024_OBSERVANCE-OF-LENTEN-SEASON.pdf', 
      description: 'Reflective devotional activity, March 27, 2024, 10:00 AM' 
    },
  ];
  
  const features = [
    {
      title: 'Embrace Change',
      description: 'Be open to new ideas and ways of working.',
      icon: <RiArrowUpDoubleFill className="h-8 w-8" />,
    },
    {
      title: 'Challenge the Status Quo',
      description: 'Think creatively and explore innovative solutions.',
      icon: <RiArrowUpDoubleFill className="h-8 w-8" />,
    },
    {
      title: 'Pursue Excellence',
      description: 'Strive for the highest standards in everything we do.',
      icon: <RiArrowUpDoubleFill className="h-8 w-8" />,
    },
    {
      title: 'Lift Each Other',
      description: 'Support and encourage one another in our pursuit of excellence.',
      icon: <RiArrowUpDoubleFill className="h-8 w-8" />,
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
              <div
                key={index}
                className="relative cursor-pointer p-6 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-800 dark:to-teal-700 shadow-lg hover:scale-105 transform transition-all"
              >
                {/* Decorative Background Shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-30 -z-10"></div>

                {/* Icon and Title */}
                <div className="flex flex-col gap-4">
                  <span className="inline-block p-3 text-white rounded-lg bg-blue-800/80 w-12 flex items-center justify-center ">
                    <form.icon className="w-5 h-5" />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-white">{form.title}</h2>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-100">{form.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6 items-center">
                  <a
                    href={form.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition-colors"
                  >
                    View Form
                  </a>

                  {/* QR Code Button */}
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => setSelectedQRCode(form.link)}
                          className="text-white hover:underline transition-colors"
                        >
                          Show QR Code
                        </button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogTitle className="text-gray-800 dark:text-gray-300">
                          QR Code for {form.title}
                        </DialogTitle>
                        <DialogDescription>
                          <ReactQRCode value={selectedQRCode || ''} size={256} className="mx-auto border-4 p-4" />
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

        <section>
        <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center mt-20">
          Advisories and Memorandum
        </h1>
            <div className="flex flex-wrap justify-center lg:justify-between gap-8 py-12 mt-10">
      {/* Left Advisory Section */}
              <div className="hidden lg:flex flex-col gap-6 lg:w-1/4">
                {advisories.slice(0, 2).map((advisory, index) => (
                  <div
                    key={index}
                    className="relative p-6 text-gray-800 dark:text-gray-200 bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                    <a
                      href={advisory.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium leading-relaxed hover:underline"
                    >
                      {advisory.text}
                    </a>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {/* Optional description */}
                      {advisory.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Picture Section */}
              <div className="w-full lg:w-auto">
                <div className="relative group">
                  <img
                    src={images.hr}
                    alt="Center Image"
                    className="w-80 rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0"></div>
                </div>
              </div>

              {/* Right Advisory Section */}
              <div className="hidden lg:flex flex-col gap-6 lg:w-1/4">
                {advisories.slice(2).map((advisory, index) => (
                  <div
                    key={index}
                    className="relative p-6 text-gray-800 dark:text-gray-200 bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                      {index + 3}
                    </div>
                    <a
                      href={advisory.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium leading-relaxed hover:underline"
                    >
                      {advisory.text}
                    </a>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {/* Optional description */}
                    {advisory.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>



        <div>
          <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center mt-12">
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

          <section className="py-16 bg-gradient-to-b mt-20 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <div className="mx-auto px-6 lg:px-8 max-w-7xl">
              <h3 className="text-4xl font-extrabold leading-snug text-gray-800 dark:text-gray-100 flex flex-col justify-center items-center text-center">
                      RISE 2025: A Movement for Excellence
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center mb-10">
                      Join us on a transformative journey toward innovation and success.
                    </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                  {/* Image Section */}
                  
                  <div className="relative">
                    <img
                      src={images.risee}
                      alt="A representative image for Graduate School"
                      className="w-full h-auto rounded-xl shadow-xl transform transition duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
                  </div>

                  {/* Content Section */}
                  <div>
                    <div className="flex flex-col gap-6 mt-8">
                    {features.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-600 text-white rounded-full shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{item.title}</h4>
                          <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
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
