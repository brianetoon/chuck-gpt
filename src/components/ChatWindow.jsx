import { useEffect, useRef } from "react";
import useChuckStore from "../store/useChuckStore";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

export default function ChatWindow() {
  const { chats } = useChuckStore();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats])

  return (
    <div className="chat-window">
      {chats.map(chat => (
        chat.type === "user" ?
          <UserMessage chat={chat} key={chat.key} /> :
          <BotMessage chat={chat} key={chat.key} />
      ))}
      <div ref={chatEndRef}></div>
    </div>
  )
}
