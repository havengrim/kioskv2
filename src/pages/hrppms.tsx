import { useState, useEffect } from "react";
import images from "@/assets/images";
import Sidebar from "@/components/sidebar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IoMdGlobe } from "react-icons/io";
import { Button } from "@/components/ui/button";

const Hrppms = () => {
  const [activeTab, setActiveTab] = useState("Announcements");
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);
  const tabs = [
    {
      name: "Announcements",
      content: "Stay updated with the latest announcements and events.",
      type: "text", // Text-based content
    },
    {
      name: "Vacant Position",
      content: "Explore career opportunities and vacant positions at DSWD.",
      type: "card", // Card-based content
    },
    {
      name: "Downloadables",
      content: "Access important documents, forms, and resources.",
      type: "photo", // Photo-based content
    },
    {
      name: "Notice to the Public",
      content: "",
      type: "card", // Text-based content
    },
    {
      name: "Our Team",
      content: "",
      type: "team", // Text-based content
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row dark:bg-gray-900 dark:text-white xl:h-full lg:h-screen">
      <Sidebar />
      <div className="container mx-auto p-4 lg:pl-20">
        <div className="w-full rounded-md bg-gray-200 dark:bg-gray-800">
          <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-10 items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <span className="text-3xl lg:text-3xl xl:text-5xl font-semibold">
                Human Resource Planning and Performance Management Section
              </span>
              <p className="text-sm lg:text-md xl:text-lg mt-2">
                The HRPPMS of DSWD ensures strategic workforce planning and performance management, empowering employees to deliver efficient and responsive social welfare services.
              </p>
              <Button className="w-40 bg-blue-800 rounded-full">Learn More</Button>
            </div>
            <img
              src={images.cover4}
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
          <h2 className="text-2xl font-semibold">{activeTab}</h2>

          {/* Render content dynamically based on tab type */}
          {tabs.find((tab) => tab.name === activeTab)?.type === "text" && (
            <div className="flex flex-col gap-5 mt-5">

               <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800">
                <div className="flex justify-between items-center w-full ">
                  <div className="flex gap-2 mt-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold">HRPPMS - DSWD</span>
                      <div className="flex gap-2 items-center -mt-2">

                        <IoMdGlobe className="mt-1 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BsThreeDots />
                    <MdClose />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Ready your requirements in 𝗽𝗱𝗳 𝗳𝗼𝗿𝗺𝗮𝘁 and 𝘀𝗰𝗮𝗻 𝗤𝗥 𝗰𝗼𝗱𝗲 provided to apply:</h1>
                  <p>1. Application Letter addressed to Regional Director Venus F. Rebuldela of DSWD Field Office III;<br />
2. Duly accomplished Personal Data Sheet (PDS) with photo and thumbmark;<br />
3. Duly accomplished Work Experience Sheet;<br />
4. Authenticated or Photocopy of Transcript of Records and/or Diploma;<br />
5. Certificate/s of relevant training and seminars attended, if applicable;<br />
6. Certificate/s of Employment;<br />
7. Clearance Certificate from Previous Employer;<br />
8. Scanned Copy of Valid NBI/Police Clearance;<br />
9. Scanned Copy of Civil Service Eligibility and/or Valid PRC ID; and <br />
10. Copy of IPCR/Certificate of Performance Rating in the last rating period.<br />

Qualified applicants should apply online through the DSWD FO3 Recruitment Form.

Kindly scan the QR Code attached in each posting or access this link: https://bit.ly/FO3Recruitment

You may also visit our Facebook Page: https://web.facebook.com/dswdfo3recruitment</p>
                  <div className="flex justify-center items-center">
                    <img src={images.announcement2} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 mt-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold">HRPPMS - DSWD</span>
                      <div className="flex gap-2 items-center -mt-2">
                     
                        <IoMdGlobe className="mt-1 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BsThreeDots />
                    <MdClose />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Greetings! </h1>
                  <p>DSWD Field Office 3 aims to promote fairness and inclusion, break barriers and build futures through the Equal Employment Opportunity Principle.</p>
                  <div className="flex justify-center items-center">
                    <img src={images.announcement3} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 mt-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold">HRPPMS - DSWD</span>
                      <div className="flex gap-2 items-center -mt-2">
                     
                        <IoMdGlobe className="mt-1 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BsThreeDots />
                    <MdClose />
                  </div>
                </div>
                <div>
                  {/* <h1 className="text-xl font-semibold">Greetings! </h1> */}
                  <p>In connection with the May 12, 2025 National and Local Elections and BARMM Parliamentary Elections, may we remind you of the prohibited acts and corresponding periods as mentioned therein.</p>
                  <div className="flex justify-center items-center">
                    <img src={images.announcement4} alt="" />
                  </div>
                </div>
              </div>



              <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 mt-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold">HRPPMS - DSWD</span>
                      <div className="flex gap-2 items-center -mt-2">
                     
                        <IoMdGlobe className="mt-1 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BsThreeDots />
                    <MdClose />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Greetings! </h1>
                  <p>The HRPPMS enjoins all COS and JO workers on the virtual orientation that will be conducted TOMORROW,  December 19, 2024 (Thursday), at 10:00 AM via this link: https://meet.google.com/fsc-zgme-dew.
                  Thank you and see you virtually!</p>
                  <div className="flex justify-center items-center">
                    <img src={images.announcement1} alt="" />
                  </div>
                </div>
              </div>



              

              <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800">
                <div className="flex justify-between items-center w-full ">
                  <div className="flex gap-2 mt-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold">HRPPMS - DSWD</span>
                      <div className="flex gap-2 items-center -mt-2">

                        <IoMdGlobe className="mt-1 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BsThreeDots />
                    <MdClose />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">HR-Advisory NO. 03_Regional Guidelines on Filling Up of Contract of-Service COS Positions</h1>
                  <div className="flex justify-center items-center">
                    <img src={images.poster1} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 dark:bg-gray-800">
                <div className="flex justify-between items-center w-full ">
                  <div className="flex gap-2 mt-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold">HRPPMS - DSWD</span>
                      <div className="flex gap-2 items-center -mt-2">

                        <IoMdGlobe className="mt-1 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BsThreeDots />
                    <MdClose />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">HR Advisory NO. 02-Regional Guidelines Streamlining of the-Recruitment Selection and Placement Process for vacant  non career position</h1>
                  <div className="flex justify-center items-center">
                    <img src={images.poster2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {tabs.find((tab) => tab.name === activeTab)?.type === "card" && (
            <div className="min-h-[300px]">
              <div className="p-4 bg-gray-100 rounded-md shadow-md mt-4 dark:bg-gray-700">
                <h3 className="text-xl font-semibold">Vacant Positions</h3>
                <p className="mt-2">Here you can find the available positions at DSWD.</p>
              </div>
            </div>
          )}

          {tabs.find((tab) => tab.name === activeTab)?.type === "photo" && (
            <div className="mt-4">
              <div className="grid grid-cols-3 gap-5">
                <Card className="bg-white dark:bg-gray-700">
                  <CardHeader>
                    <span className="font-semibold"> CS-Form-No.-212-Attachment-Work-Experience-Sheets</span>
                  </CardHeader>
                  <CardContent>
                    <img src={images.qr1} alt="" />
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-700">
                  <CardHeader>
                    <span className="font-semibold"> CS-Form-No.-212-Personal-Data-Sheet-revised</span>
                  </CardHeader>
                  <CardContent>
                    <img src={images.qr2} alt="" />
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-700">
                  <CardHeader>
                    <span className="font-semibold">MC-No.-16-s.-2017</span>
                  </CardHeader>
                  <CardContent>
                    <img src={images.qr3} alt="" />
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {tabs.find((tab) => tab.name === activeTab)?.type === "team" && (
            <div className="mt-4">
                  <section className="py-6">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <p
          className="max-w-2xl text-center dark:text-gray-600"
          data-aos="fade-up"
        >
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
          quam natus quis nihil quod, hic explicabo doloribus magnam neque,
          exercitationem eius sunt!
        </p>
        <div
          className="flex flex-row flex-wrap-reverse justify-center"
          data-aos="fade-up"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center m-8 text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Stagger animations for each card
            >
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={`https://source.unsplash.com/100x100/?portrait?${index}`}
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hrppms;
