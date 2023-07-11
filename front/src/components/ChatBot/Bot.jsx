import React from "react";
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./ConfigBot";
import "react-chatbot-kit/build/main.css";
import Online from "./Online";

const Bot = () => {
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
    </div>
  );
};

export default Bot;
