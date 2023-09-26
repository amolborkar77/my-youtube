import React, { useEffect, useState } from "react";

import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomName, makeMessage } from "./utils";

const liveChatWrapper =
  "w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeMessage(25),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  const handleChat = () => {
    message &&
      dispatch(
        addMessage({
          name: "Amol Borkar",
          message: message,
        })
      );
    setMessage("");
  };

  return (
    <div className={liveChatWrapper}>
      <div className="flex p-2">
        <input
          className="w-full border border-black mr-2 rounded-lg"
          type="text"
          name="messqage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="bg-blue-500 px-2 rounded-lg cursor-pointer"
          onClick={(e) => handleChat(e.target.value)}
        >
          Send
        </button>
      </div>

      <p className="p-2">Say something...</p>

      {
        //Disclaimer: don't use indexes as a key
        chatMessages.map((chat, index) => {
          const { name, message } = chat;

          return <ChatMessage key={index} name={name} message={message} />;
        })
      }
    </div>
  );
};

export default LiveChat;
