import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatMessage from "./ChatMessage";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomName, makeMessage } from "./utils";
import { MSG_TITLE } from "../../utils/constants";

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

  const handleSendOnClick = () => {
    message &&
      dispatch(
        addMessage({
          name: "Amol Borkar",
          message: message,
        })
      );
    setMessage("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSendOnClick();
  };

  return (
    <div className={liveChatWrapper}>
      <form className="flex p-2" onSubmit={handleOnSubmit}>
        <input
          className="w-full border border-black mr-2 rounded-lg"
          type="text"
          name="messqage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="bg-blue-500 px-2 rounded-lg cursor-pointer"
          onClick={handleSendOnClick}
        >
          Send
        </button>
      </form>

      <p className="p-2">{MSG_TITLE}</p>

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
