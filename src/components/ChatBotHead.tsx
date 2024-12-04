import { useState, useEffect } from "react";
import { BsChatDots } from "react-icons/bs";

const ChatBotHead = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup every 5 seconds
    const interval = setInterval(() => {
      setShowPopup(true); // Show the popup
      setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
    }, 10000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <>
      {/* Chatbot Button on the Bottom-Right */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center">
        {/* Popup on the Left of Chatbot Button */}
        {showPopup && (
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-lg shadow-md animate-slide-up mr-4 -mt-10">
            Hi! How can I help you today?
          </div>
        )}
        {/* Chatbot Button */}
        <button
          className="bg-blue-600 dark:bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none"
          title="Chat with us"
        >
          <BsChatDots size={24} />
        </button>
      </div>
    </>
  );
};

export default ChatBotHead;
