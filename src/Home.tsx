import Navbar from "@/components/Navbar";
import images from "@/assets/images";
import axios from 'axios';
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
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogHeader } from '@/components/ui/dialog';
import Typing from 'react-typing-effect';
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import Lottie from 'react-lottie';
import animationData from '@/assets/lottie.json';
import { RiArrowUpDoubleFill } from "react-icons/ri";
import App from "./components/Swiper";
import memo13 from "@/assets/memo/HRMDD-MEMO-13.pdf"
import memo15 from "@/assets/memo/HRMDD-MEMO-15.pdf"
import memo16 from "@/assets/memo/HRMDD-MEMO-16.pdf"
import memo17 from "@/assets/memo/HRMDD-MEMO-17.pdf"
import memo18 from "@/assets/memo/HRMDD-MEMO-18.pdf"
import memo23 from "@/assets/memo/HRMDD-MEMO-23.pdf"
import Example from "./components/FloatingPhone";
import RevealBento from "./components/RevealBento";
import Barometer from "@/components/FeedbackDialog"


interface Position {
  name: string;
  filled: number;
}


const Home = () => {

  const toCapitalizedCase = (str: string): string => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  

  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      try {
        const response = await axios.get(url);

        // Process the response data
        const fetchedData = response.data;
        if (fetchedData && fetchedData.data) {
          // Dynamically gather up to 24 positions
          const positionsArray: Position[] = []; // Explicitly type this as an array of Position
          for (let i = 1; i <= 24; i++) {
            const position = fetchedData.data[`position${i}`];
            if (position) {
              positionsArray.push({
                name: position.name || "N/A",
                filled: position.filled || 0,
              });
            }
          }
          setPositions(positionsArray); // Now this will work without TypeScript errors
        } else {
          console.warn("Unexpected response structure:", fetchedData);
        }
      } catch (err) {
        console.error("Error fetching data from Google Apps Script:", err);
      }
    };

    fetchEmployeeData();
  }, []);


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
      title: "Personal Data Sheet",
      description: "Download and view the personal data sheet for employee reference.",
      icon: GrDocumentUser,
      link: "https://docs.google.com/spreadsheets/d/15q6RhXWmajWXeWz7TRlmwh7Sp8HYlW65yQlYpE0J7Og/edit?gid=1257943944#gid=1257943944",
      Downloadlink: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/12/CS-Form-No.-212-Personal-Data-Sheet-revised.xlsx",
    },
    {
      title: "Regular, Contractual, and Casual Application for Leave Form",
      description: "Download and view the leave application form for Permanent, Contractual, and Casual employees.",
      icon: IoDocumentTextOutline,
      link: "https://drive.google.com/file/d/1Jt9_zJhFoLiDvAoIVkjRdeZOpNJxb-GY/preview",
      Downloadlink: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Regular-Contractual-and-Casual-Application-for-Leave-Form.pdf",
    },
    {
      title: "Contract of Service Application for Leave",
      description: "Download and view the leave application form for Contract of Service employees.",
      icon: HiOutlineDocumentText,
      link:"https://drive.google.com/file/d/1P0qUhYDghoOYgV22rupHkdgULTlbP4v7/preview",
      Downloadlink: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Contract-of-Service-Application-for-Leave-form.pdf",
    },
    {
      title: "Daily Time Record",
      description: "Download and use the daily time record form for attendance tracking.",
      icon: GrDocumentTime,
      link:"https://drive.google.com/file/d/1bPwOmmfo75a4zTmEtNCX1Rc7huxVdz1t/preview",
      Downloadlink: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Blank-Daily-Time-Record.pdf",
    },
    {
      title: "Overtime Annex C",
      description: "Download the form for submitting and approving overtime requests.",
      icon: LuTimerReset,
      link: "https://drive.google.com/file/d/1BALdJd2lITMoZnhNtVWUHdUw1U-EPXx7/preview",
      Downloadlink: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Overtime-Annex-C.pdf",
    },
    {
      title: "Overtime Form",
      description: "Access the overtime submission form.",
      icon: AiOutlineFieldTime,
      link:"https://drive.google.com/file/d/1Ro52BLypJwXWgl0xtMZIV20HdWEeF1DI/preview",
      Downloadlink: "https://fo3.dswd.gov.ph/wp-content/uploads/2024/07/Overtime-Blank-Form.pdf",
    },

  ];
  
  const advisories = [
    { 
      text: 'HRMDD MEMORANDUM NO. 13', 
      description: 'Tracking of Learning and Development Interventions Provided and Distribution of Training Kits', 
      url: memo13 
    },
    { 
      text: 'HRMDD MEMORANDUM NO. 15', 
      url: memo15, 
      description: 'Revised Dress Code for Government Officials and Employees.' 
    },
    { 
      text: 'HRMDD MEMORANDUM NO. 16 ', 
      description: ' Extension on the Submission of CY 2024 2nd Semester Performance Ratings.', 
      url: memo16
    },
    { 
      text: 'HRMDD MEMORANDUM NO. 17', 
      url: memo17, 
      description: 'Optional Availment of Wellness Session' 
    },
    { 
      text: 'HRMDD MEMORANDUM NO. 18 ', 
      url: memo18, 
      description: 'Last Call for the Submission of CY 2025 MOA Contract for Renewal' 
    },
    { 
      text: 'HRMDD MEMORANDUM NO. 23', 
      url: memo23, 
      description: 'Gender and Development (GAD) Training Mapping' 
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
                  <h1 className="text-3xl lg:text-4xl font-semibold tracking-wide text-white dark:text-white">
                 <span className="text-wite"> Welcome to HRMDD </span><br />
                  <Typing
                    speed={100}
                    eraseDelay={2000}
                    text={['e-ACCESS']}
                    className="text-gray-100 dark:text-gray-300"
                  />

                  </h1>
                  <p className="mt-4 text-gray-100 dark:text-gray-300">
                    Our HRMDD Kiosk streamlines workplace operations, offering intuitive access to HR forms and announcements all in one place.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#selection"
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

          <Barometer />

    <div className="container mx-auto p-4">
    <App />

    <div className="text-center mt-20" id="selection">
            <h1 className="font-bold mb-4 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300">
              Select a Division for Updates
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl mb-10">
              Get the latest news and updates. Choose a section to begin.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5">
            <a href="https://fo3.dswd.gov.ph/hrppms/" target="_blank">
              <div className="relative h-32">
                <Card
                  style={{ backgroundImage: `url(${images.slide2})` }}
                  className="bg-cover bg-no-repeat h-full cursor-pointer bg-center"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4">
                    <div className="flex">
                    <div className="w-1 h-20 bg-white mr-4"></div>
                    <div className="flex flex-col justify-center">
                      <h2 className="font-semibold text-xl">HRPPMS</h2>
                      <p className="text-sm">Human Resource Planning and Performance Management Section</p>
                    </div>
                    </div>
                  </div>
                </Card>
              </div>
            </a>
            <a href="https://fo3.dswd.gov.ph/lds/" target="_blank">
              <div className="relative h-32">
                <Card
                  style={{ backgroundImage: `url(${images.slide3})` }}
                  className="bg-cover bg-no-repeat h-full cursor-pointer bg-center"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4">
                    <div className="flex">
                    <div className="w-1 h-20 bg-white mr-4"></div>
                    <div className="flex flex-col justify-center">
                      <h2 className="font-semibold text-xl">LDS</h2>
                      <p className="text-sm">Learning and Development Section</p>
                    </div>
                    </div>
                  </div>
                </Card>
              </div>
            </a>
            <a href="https://fo3.dswd.gov.ph/hrws/" target="_blank">
              <div className="relative h-32">
                <Card
                  style={{ backgroundImage: `url(${images.slide4  })` }}
                  className="bg-cover bg-no-repeat h-full cursor-pointer bg-center"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4">
                    <div className="flex">
                      <div className="w-1 h-20 bg-white mr-4"></div>
                      <div className="flex flex-col justify-center">
                        <h2 className="font-semibold text-xl">HRWS</h2>
                        <p className="text-sm">Human Resource Welfare Section</p>
                      </div>
                      </div>
                  </div>
                </Card>
              </div>
            </a>
            <a href="https://fo3.dswd.gov.ph/pas/" target="_blank">
              <div className="relative h-32">
                <Card
                  style={{ backgroundImage: `url(${images.slide1})` }}
                  className="bg-cover bg-no-repeat h-full cursor-pointer bg-center"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4">
                  <div className="flex">
                      <div className="w-1 h-20 bg-white mr-4"></div>
                      <div className="flex flex-col justify-center">
                        <h2 className="font-semibold text-xl">PAS</h2>
                        <p className="text-sm">Personnel Administrative Section</p>
                      </div>
                      </div>
                  </div>
                </Card>
              </div>
            </a>


            {/* <a href="https://fo3.dswd.gov.ph/pas/" target="_blank">
              <div className="relative h-32">
                <Card
                  style={{ backgroundImage: `url(${images.pas8})` }}
                  className="bg-cover bg-no-repeat h-full cursor-pointer bg-center"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4">
                  <div className="flex">
                      <div className="w-1 h-20 bg-white mr-4"></div>
                      <div className="flex flex-col justify-center">
                        <h2 className="font-semibold text-xl">SWEAP</h2>
                        <p className="text-sm">Personnel Administrative Section</p>
                      </div>
                      </div>
                  </div>
                </Card>
              </div>
            </a> */}
          </div>
        {/* Section Cards */}
        <section className="mt-20">
        <div className="text-center mt-20">
          <h1 className="font-bold mb-4 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300">
            Most Requested Forms
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl">
            Access the most commonly requested forms quickly and easily. Find what you need below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 mb-20">
            {forms.map((form, index) => (
              <div
                key={index}
                className="relative cursor-pointer p-6 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-800 dark:to-teal-700 shadow-lg hover:scale-105 transform transition-all"
              >
                {/* Decorative Background Shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-30 -z-10"></div>

                {/* Icon and Title */}
                <div className="flex flex-col gap-4">
                  <span className=" p-3 text-white rounded-lg bg-blue-800/80 w-12 flex items-center justify-center ">
                    <form.icon className="w-5 h-5" />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-white">{form.title}</h2>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-100">{form.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6 items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition-colors">
                      View Form
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-[90vw] h-[80vh] max-w-5xl">
                    <iframe
                      src={form.link}
                      width="100%"
                      height="100%"
                      className="rounded-md border"
                      allow="autoplay"
                    />
                  </DialogContent>
                </Dialog>

                  {/* QR Code Button */}
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                         onClick={() => setSelectedQRCode(form.Downloadlink ?? '')}
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
          <div className="text-center mt-20">
            <h1 className="font-bold mb-4 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300">
              Advisories & Memos
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl">
              Find the latest advisories and memos to stay updated on important announcements and guidelines.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between gap-8 py-12 mt-10">
            {/* Left Advisory Section */}
  
            <div className="hidden lg:flex flex-col gap-6 lg:w-1/4">
            
            {advisories.slice(0, 3).map((advisory, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="relative p-6 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold leading-relaxed hover:text-blue-600 dark:hover:text-blue-400">
                      {advisory.text}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {advisory.description}
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="p-6 flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-[90vw] max-w-3xl h-full">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">{advisory.text} -   {advisory.description}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 w-full h-full">
                    <iframe
                      src={advisory.url}
                      className="w-full h-full border-none"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            ))}


            </div>

            {/* Center Picture Section */}
            <div className="w-full lg:w-auto flex justify-center items-center">
              <img
                src={images.hr}
                alt="Center Image"
                className="w-80 rounded-lg"
              />
            </div>

            {/* Right Advisory Section */}
            <div className="hidden lg:flex flex-col gap-6 lg:w-1/4">
            {advisories.slice(3).map((advisory, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="relative p-6 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold leading-relaxed hover:text-blue-600 dark:hover:text-blue-400">
                      {advisory.text}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {advisory.description}
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-[90vw] max-w-3xl h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">{advisory.text} -   {advisory.description} </DialogTitle>
                    
                  </DialogHeader>
                  <div className="mt-4 w-full h-full">
                    <iframe
                      src={advisory.url}
                      className="w-full h-full border-none"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            ))}

            </div>
          </div>
      </section>



        <div>
            
          <section className="mt-20 relative">
              <h1 className="font-bold mb-4 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
                Employee Summary
              </h1>

              {/* Cards on the left */}
              <div className="absolute top-40 left-0 flex flex-col gap-4">
                  {/* First Position (position1) */}
                  {positions[0] && (
                    <Card className="bg-white shadow-md rounded-xl overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-lg z-10">
                      <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-t-xl flex items-center gap-4 justify-center">
                        <span className="bg-white text-indigo-600 text-xl font-bold p-3 rounded-md shadow-md">
                          {positions[0].filled}
                        </span>
                              <h3 className="text-sm font-medium">
                                  {positions[0]?.name ? toCapitalizedCase(positions[0].name) : "N/A"}
                              </h3>
                      </div>
                    </Card>
                    
                  )}

                  {positions[5] && (
                    <Card className="bg-white shadow-md rounded-xl overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-lg z-10">
                      <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-t-xl flex items-center gap-4 justify-center">
                        <span className="bg-white text-indigo-600 text-xl font-bold p-3 rounded-md shadow-md">
                          {positions[5].filled}
                        </span>
                              <h3 className="text-sm font-medium">
                                  {positions[5]?.name ? toCapitalizedCase(positions[5].name) : "N/A"}
                              </h3>
                      </div>
                    </Card>
                    
                  )}
                  {positions[9] && (
                    <Card className="bg-white shadow-md rounded-xl overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-lg z-10">
                      <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-t-xl flex items-center gap-4 justify-center">
                        <span className="bg-white text-indigo-600 text-xl font-bold p-3 rounded-md shadow-md">
                          {positions[9].filled}
                        </span>
                              <h3 className="text-sm font-medium">
                                  {positions[9]?.name ? toCapitalizedCase(positions[9].name) : "N/A"}
                              </h3>
                      </div>
                    </Card>
                    
                  )}

                  {/* Lines connecting the cards */}
                  {/* <div className="absolute -right-32 top-1/2 transform -translate-rm -translate-y-y-1/2 w-36 h-0.5 bg-blue-500 z-0"></div>
                  <div className="absolute -right-[9.9rem] top-[80px] transfo1/2 w-0.5 h-20 bg-blue-500 rounded-full -rotate-45"></div> */}
                </div>
                              {/* Line connecting to phone */}
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-px h-48 bg-gradient-to-b from-transparent to-purple-500"></div>

              {/* Phone Section on the Right */}
              <div className="absolute top-40 right-0 flex flex-col gap-4">
                {/* Second Position (position2) */}
                {positions[1] && (
                  <Card className="bg-white shadow-md rounded-xl overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-lg z-10">
                    <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-t-xl flex items-center gap-4 justify-center">
                      <span className="bg-white text-indigo-600 text-xl font-bold p-3 rounded-md shadow-md">
                        {positions[1].filled}
                      </span>
                        <h3 className="text-sm font-medium">
                          {positions[2]?.name ? toCapitalizedCase(positions[2].name) : "N/A"}
                        </h3>

                    </div>
                  </Card>
                )}

              {positions[1] && (
                  <Card className="bg-white shadow-md rounded-xl overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-lg z-10">
                    <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-t-xl flex items-center gap-4 justify-center">
                      <span className="bg-white text-indigo-600 text-xl font-bold p-3 rounded-md shadow-md">
                        {positions[1].filled}
                      </span>
                        <h3 className="text-sm font-medium">
                          {positions[1]?.name ? toCapitalizedCase(positions[1].name) : "N/A"}
                        </h3>

                    </div>
                  </Card>
                )}

                {positions[3] && (
                  <Card className="bg-white shadow-md rounded-xl overflow-hidden max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-lg z-10">
                    <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-t-xl flex items-center gap-4 justify-center">
                      <span className="bg-white text-indigo-600 text-xl font-bold p-3 rounded-md shadow-md">
                        {positions[3].filled}
                      </span>
                        <h3 className="text-sm font-medium">
                          {positions[3]?.name ? toCapitalizedCase(positions[3].name) : "N/A"}
                        </h3>

                    </div>
                  </Card>
                )}
                

              {/* <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-36 h-0.5 bg-blue-500 z-0"></div>
              <div className="absolute -left-[9.9rem] top-[80px] transform -translate-y-1/2 w-0.5 h-20 bg-blue-500 rounded-full rotate-45"></div> */}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                This section provides a summary of the total number of employees, as well as a breakdown by division.
              </p>
              <Example />

                
            </section>
            <RevealBento />

          <section className="py-16 bg-gradient-to-b mt-20 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <div className="mx-auto px-6 lg:px-8 max-w-7xl">
              <h3 className="text-4xl font-bold leading-snug text-gray-800 dark:text-gray-100 flex flex-col justify-center items-center text-center">
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
