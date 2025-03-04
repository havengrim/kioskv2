import { useState, useEffect } from "react";
import { BsChatDots } from "react-icons/bs";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"; // Import ShadCN's Dialog components
import ReactQRCode from "react-qr-code"; // Import ReactQRCode

const ChatBotHead = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupInterval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }, 5000);

    return () => clearInterval(popupInterval);
  }, []);

  return (
    <>
      {/* Chatbot Button on the Bottom-Right */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center">
        {/* Popup Message on the Left of Chatbot Button */}
        {showPopup && (
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-lg shadow-md animate-slide-up mr-4">
            Hi! How can I help you today?
          </div>
        )}
        {/* Chatbot Button */}
        <Dialog>
          <DialogTrigger>
            <button
              className="bg-blue-600 dark:bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none"
              title="Chat with us"
            >
              <BsChatDots size={24} />
            </button>
          </DialogTrigger>

          {/* QR Code Dialog Content */}
          <DialogContent className="sm:max-w-[425px] w-[90%] dark:text-white">
            <DialogTitle className="dark:text-white text-center">Scan the QR Code</DialogTitle>
            <DialogDescription className="flex flex-col items-center">
              <div className="bg-white p-4 border-2 rounded-md">
                <ReactQRCode
                  value="https://www.google.com/" // Replace with your chatbot URL
                  size={192}
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </div>
              <p className="text-center text-gray-800 dark:text-white mt-4">
                Scan this QR code for your inquiry.
              </p>
            </DialogDescription>
            <div className="flex justify-end">
              <DialogClose className="mt-4 bg-black dark:bg-gray-100 text-white dark:text-gray-900 py-2 px-4 rounded-full focus:outline-none">
                Close
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ChatBotHead;
