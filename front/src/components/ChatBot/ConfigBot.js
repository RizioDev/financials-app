import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import DogPicture from "./DogPicture";

const botName = "Carolina";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hola soy ${botName} tu asistente virtual, ¿en qué puedo ayudarte?`
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "orange",
    },
    chatButton: {
      backgroundColor: "orange",
    },
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },

  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
