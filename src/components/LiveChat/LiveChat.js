import React from "react";
import ChatMessage from "./ChatMessage";
import { CHAT_MESSAGES } from "../Constants";
const liveChatWrapper =
  "w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg";

const LiveChat = () => {
  return (
    <div className={liveChatWrapper}>
      {CHAT_MESSAGES.map((chat) => {
        const { name, message } = chat;

        return <ChatMessage name={name} message={message} />;
      })}
    </div>
  );
};

export default LiveChat;
