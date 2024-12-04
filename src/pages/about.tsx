import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { FaRegCalendarAlt } from "react-icons/fa";
  import Sidebar from "@/components/sidebar";
  
  
  const About = () => {
    const timelineData = [
      { year: "2005", description: "The DBM approved the Rationalization and Streamlining Plan (RSP) to align with the Department’s steering role." },
      { year: "2003", description: "Executive Order No. 221 redefined the DSWD’s mandate, roles, and functions." },
      { year: "1998", description: "Executive Order No. 15 strengthened the DSWD’s repositioning efforts." },
      { year: "1991", description: "Republic Act 7160 (Local Government Code) devolved DSWD basic services to local government units." },
      { year: "1987", description: "Reorganized and renamed as Department of Social Welfare and Development (DSWD) under Executive Order 123." },
      { year: "1978", description: "Renamed as Ministry of Social Services and Development (MSSD) with the shift to a parliamentary government." },
      { year: "1976", description: "Renamed as the Department of Social Services and Development (DSSD) under Presidential Decree No. 994." },
      { year: "1968", description: "Republic Act 5416 elevated SWA into a Department, achieving equal status with health and education." },
      { year: "1951", description: "SWC and PACSA merged into the Social Welfare Administration (SWA), marking an integrated welfare program." },
      { year: "1948", description: "President Quirino created the President’s Action Committee on Social Amelioration (PACSA)." },
      { year: "1947", description: "President Roxas abolished the Bureau of Public Welfare and created the Social Welfare Commission (SWC)." },
      { year: "1941", description: "The Bureau of Public Welfare became part of the Department of Health and Public Welfare and managed public child-caring institutions." },
      { year: "1939", description: "Commonwealth Act No. 439 created the Department of Health and Public Welfare." },
      { year: "1921", description: "The PWB was abolished and replaced by the Bureau of Public Welfare under the Department of Public Instruction." },
      { year: "1915", description: "The Public Welfare Board (PWB) was created to study, coordinate, and regulate social services." },
    ];
  
    return (
      <div className="flex flex-col dark:bg-gray-900 dark:text-white">
        <Sidebar />
        <div className="container mx-auto p-4 lg:pl-20">
          <h1 className="font-bold mb-8 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
            History of DSWD
          </h1>
          <VerticalTimeline>
            {timelineData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                date={item.year}
                icon={<FaRegCalendarAlt />}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                contentStyle={{ background: "#f9f9f9", color: "#333" }}
                contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
              >
                <h3 className="vertical-timeline-element-title text-lg font-semibold dark:text-gray-500">
                  {item.year}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };
  
  export default About;
  