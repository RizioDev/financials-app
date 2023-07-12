import React from "react";
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./ConfigBot";
import { FaTimes } from "react-icons/fa";
import "react-chatbot-kit/build/main.css";
import Online from "./Online";

const Bot = ({ closeChatbot }) => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText={
          <p className="extra-bold">
            <span className="text-green-500 mr-1">●</span>En línea
          </p>
        }
        placeholderText="Escribe un mensaje..."
      />
      <button
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-700 absolute top-0 right-0 mt-1 mr-1"
        onClick={closeChatbot}
      >
        <FaTimes className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default Bot;
