import { useState } from "react";
import images from "@/assets/images";
import Sidebar from "@/components/sidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { Button } from "@/components/ui/button";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
const Lds = () => {
  const [activeTab, setActiveTab] = useState("Announcements");

  const tabs = [
    {
      name: "Announcements",
      content: "Stay updated with the latest announcements and events.",
      type: "text", // Text-based content
    },
    {
      name: "Downloadables",
      content: "Access important documents, forms, and resources.",
      type: "photo", // Photo-based content
    },
    {
      name: "Previous Posting",
      content: "View records of previous job postings and updates.",
      type: "card", // Text-based content
    },
  ];

  const qrData = [
    {
      title: "Analytical Skill Analogy and Logic",
      image: images.lqr1,
    },
    {
      title: "Clerical Operations Ability",
      image: images.lqr2,
    },
    {
      title: "Effective Tips in taking the Civil Service Exam",
      image: images.lqr3,
    },
    {
      title: "General Information (PH Consti, Code of Conduct, Human Rights, Envi Protection)",
      image: images.lqr4,
    },
    {
      title: "Numerical Reasoning Basic Operations and Word Problems",
      image: images.lqr5,
    },
    {
      title: "Spelling and Idiomatic Expression",
      image: images.lqr6,
    },
    {
      title: "Verbal Reasoning (Grammar and Correct Usage)",
      image: images.lqr7,
    },
    {
      title: "Verbal Reasoning (Paragraph Organization)",
      image: images.lqr8,
    },
    {
      title: "Verbal Reasoning (Reading Comprehension)",
      image: images.lqr9,
    },
    {
      title: "Verbal Reasoning (Vocabulary)",
      image: images.lqr10,
    },
  ];
  

  return (
    <div className="flex flex-col lg:flex-row dark:bg-gray-900">
      <Sidebar />
      <div className="container mx-auto p-4 lg:pl-20">
        <div className="w-full rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white">
          <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-10 items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-left">
                <span className="text-3xl lg:text-3xl xl:text-5xl font-semibold">
                    Learning and Development Section
                    </span>
                    <p className="text-sm lg:text-md xl:text-lg mt-2">
                    The Learning and Development Section of DSWD focuses on enhancing the skills, knowledge, and capabilities of employees. Through targeted training programs and development initiatives, DSWD aims to empower its workforce, enabling them to deliver quality services and contribute to the agency's mission of improving social welfare in the community.
                    </p>
                    <Button className="w-40 bg-blue-800 rounded-full">Learn More</Button>
            </div>
            <img
              src={images.learning1}
              alt="HRPPMS Banner"
              className="h-40 w-full lg:h-60 lg:w-80 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-5">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`rounded-full px-4 py-2 text-center cursor-pointer focus:outline-none ${
                activeTab === tab.name
                  ? "bg-[#00008E] text-white"
                  : "bg-gray-200 text-black dark:bg-gray-800 dark:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 p-4">
          <h2 className="text-2xl font-semibold dark:text-white">{activeTab}</h2>

          {/* Render content dynamically based on tab type */}
          {tabs.find((tab) => tab.name === activeTab)?.type === "text" && (
            // <p className="text-lg mt-2">
            //   {tabs.find((tab) => tab.name === activeTab)?.content}
            // </p>
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white mt-6">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 mt-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justify-between">
                        <span className="font-semibold">LDS - DSWD</span>
                        <div className="flex gap-2 items-center -mt-2">
                            <span className="opacity-75 text-xs">15 mins ago</span>
                            <IoMdGlobe className="mt-1 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                        <BsThreeDots />
                        <MdClose />
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-xl font-semibold mb-4">Capacity building on psychosocial services on gender equality and women empowerments</h1>
                    <div className="flex justify-center items-center">
                      <img src={images.lds1} alt="" className="rounded-md" />
                    </div>
                  </div>
              </div>

                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white">
                    <div className="flex justify-between items-center w-full ">
                    <div className="flex gap-2 mt-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-between">
                        <span className="font-semibold">LDS - DSWD</span>
                        <div className="flex gap-2 items-center -mt-2">
                                <span className="opacity-75 text-xs">15 mins ago</span>
                                <IoMdGlobe className="mt-1 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <BsThreeDots />
                        <MdClose />
                    </div>
                    </div>
                    <div className="">
                    <h1 className="text-xl font-semibold mb-4">Supervisory Development Course</h1>
                    <div className="flex justify-center items-center">
                        <img src={images.lds2} alt="" className="rounded-md" />
                    </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white">
                    <div className="flex justify-between items-center w-full ">
                    <div className="flex gap-2 mt-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-between">
                        <span className="font-semibold">LDS - DSWD</span>
                        <div className="flex gap-2 items-center -mt-2">
                                <span className="opacity-75 text-xs">15 mins ago</span>
                                <IoMdGlobe className="mt-1 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <BsThreeDots />
                        <MdClose />
                    </div>
                    </div>
                    <div className="">
                    <h1 className="text-xl font-semibold mb-4">Development Academy of the Philippines public management development program (PMDP) - MIDDLE MANAGERS CLASS (MMC)</h1>
                    <div className="flex justify-center items-center">
                        <img src={images.lds3} alt="" className="rounded-md" />
                    </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white">
                    <div className="flex justify-between items-center w-full ">
                    <div className="flex gap-2 mt-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-between">
                        <span className="font-semibold">LDS - DSWD</span>
                        <div className="flex gap-2 items-center -mt-2">
                                <span className="opacity-75 text-xs">15 mins ago</span>
                                <IoMdGlobe className="mt-1 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <BsThreeDots />
                        <MdClose />
                    </div>
                    </div>
                    <div className="">
                    <h1 className="text-xl font-semibold mb-4">Bachelor of Science & Master of Science in Social Work</h1>
                    <div className="flex justify-center items-center">
                        <img src={images.lds4} alt="" className="rounded-md" />
                    </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white">
                    <div className="flex justify-between items-center w-full ">
                    <div className="flex gap-2 mt-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-between">
                        <span className="font-semibold">LDS - DSWD</span>
                        <div className="flex gap-2 items-center -mt-2">
                                <span className="opacity-75 text-xs">15 mins ago</span>
                                <IoMdGlobe className="mt-1 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <BsThreeDots />
                        <MdClose />
                    </div>
                    </div>
                    <div className="">
                    <h1 className="text-xl font-semibold mb-4">New Employee Orientation</h1>
                    <div className="flex justify-center items-center">
                        <img src={images.lds5} alt="" className="rounded-md" />
                    </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800 dark:text-white">
                    <div className="flex justify-between items-center w-full ">
                    <div className="flex gap-2 mt-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-between">
                        <span className="font-semibold">LDS - DSWD</span>
                        <div className="flex gap-2 items-center -mt-2">
                                <span className="opacity-75 text-xs">15 mins ago</span>
                                <IoMdGlobe className="mt-1 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <BsThreeDots />
                        <MdClose />
                    </div>
                    </div>
                    <div className="">
                    <h1 className="text-xl font-semibold mb-4">CSE-PPT REVIEW SESSIONS</h1>
                    <div className="flex justify-center items-center">
                        <img src={images.lds6} alt="" className="rounded-md" />
                    </div>
                    </div>
                </div>
                
            </div>
            
          )}

          {tabs.find((tab) => tab.name === activeTab)?.type === "card" && (
             <div className="min-h-[300px]">
                <div className="p-4 bg-gray-100 rounded-md shadow-md mt-4 dark:bg-gray-800 dark:text-white">
                  <h3 className="text-xl font-semibold">Vacant Positions</h3>
                  <p className="mt-2">Here you can find the available positions at DSWD.</p>
                  {/* Add any specific card content like job listings, etc. */}
                </div>
              </div>
          )}

        {tabs.find((tab) => tab.name === activeTab)?.type === "photo" && (
            <div className="mt-4">
              <div className="w-full ">

              <Swiper
      spaceBetween={30} // Space between slides
      centeredSlides={true} // Center the slides
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay functionality
      pagination={{ clickable: true }} // Pagination controls
      navigation={true} // Navigation controls
      loop={true} // Infinite loop
      modules={[Autoplay, Pagination, Navigation]} // Use the necessary modules
      className="w-full h-auto"
    >
      {qrData.map((item, index) => (
        <SwiperSlide key={index}>
          <Card className="flex justify-between flex-col p-4">
            <CardHeader>
              <span className="font-semibold text-xl text-center">{item.title}</span>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-md w-full max-w-xs h-auto"
              />
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lds;
