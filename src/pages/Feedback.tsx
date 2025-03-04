import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { FaSmile, FaFrown } from 'react-icons/fa';

const Feedback = () => {
  const [selected, setSelected] = useState(null);

  const handleFeedback = (type:any) => {
    setSelected(type);
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">How was your experience?</h2>
        <div className="flex space-x-6">
          <button 
            className={`p-4 rounded-full text-4xl transition-all ${selected === 'happy' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`} 
            onClick={() => handleFeedback('happy')}
          >
            <FaSmile className="text-yellow-400" />
          </button>
          <button 
            className={`p-4 rounded-full text-4xl transition-all ${selected === 'sad' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`} 
            onClick={() => handleFeedback('sad')}
          >
            <FaFrown className="text-blue-400" />
          </button>
        </div>
        {selected && (
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">You selected: <span className="font-bold">{selected}</span></p>
        )}
      </div>
    </div>
  );
};

export default Feedback;
