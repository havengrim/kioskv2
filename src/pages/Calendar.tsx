const Calendar = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center min-h-screen p-4 dark:bg-gray-900 dark:text-white  rounded-lg">
      <h1 className="font-bold mb-2 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
        HRMDD Events and Scheduling Calendar
      </h1>

      <p className=" text-gray-600 dark:text-gray-400 max-w-2xl text-center">
        Stay up to date with upcoming events, meetings, and important schedules 
        from the HRMDD
      </p>

      <div className="mt-10 w-full max-w-7xl overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FManila&showPrint=0&showTz=0&title=HRMDD%20CALENDAR&src=YW1ndWlhb0Bkc3dkLmdvdi5waA&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D50000&color=%230B8043"
          className="w-full h-[75vh] md:h-[80vh] border-0 dark:bg-gray-900"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;
