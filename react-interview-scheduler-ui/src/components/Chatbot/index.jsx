import React, { useState } from 'react';
import { HiChat } from 'react-icons/hi';
import { AiOutlineMinus } from 'react-icons/ai';
import { BiChat } from 'react-icons/bi'; // Different icon for a more intuitive meaning

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
    { text: "Hello! I need a Chatbot!", sender: "user" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility
  const [isExpanded, setIsExpanded] = useState(false); // Set default to false for minimized view

  const handleSend = () => {
    if (inputValue.trim() === '') return; // Do nothing if input is empty
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Thank you for your message!", sender: "bot" },
      ]);
    }, 1000);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null; // Don't render the component if it's not visible

  return (
    <div
      className={`fixed bottom-4 right-4 bg-white shadow-md border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ${
        isExpanded ? 'w-96 h-96' : 'w-12 h-12'
      } flex flex-col`}
    >
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
        <h2 className={`text-lg font-semibold ${isExpanded ? 'text-zinc-800' : 'hidden'}`}>
          Chatbot Assistant
        </h2>
        <button
          onClick={handleToggleExpand}
          className="text-gray-700 hover:text-gray-900"
        >
          {isExpanded ? (
            <AiOutlineMinus className="text-gray-900 text-xl" /> // Darker icon when expanded
          ) : (
            <BiChat className="text-gray-900 text-xl" /> // Darker and more intuitive icon when minimized
          )}
        </button>
      </div>
      {isExpanded && (
        <>
          <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2" id="chatDisplay">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === 'user' ? 'self-end bg-blue-500' : 'self-start bg-zinc-500'
                } text-white max-w-xs rounded-lg px-3 py-1.5 text-sm`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="px-3 py-2 border-t border-gray-300">
            <div className="flex gap-2">
              <input
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg text-sm border-gray-300"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
