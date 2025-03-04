import { useEffect, useRef } from "react";
import useChuckStore from "../store/useChuckStore";

export default function ChatWindow() {
  const { chats } = useChuckStore();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats])

  return (
    <div className="chat-window">
      {chats.map(chat => (
        <p key={chat.key}>{chat.value}</p>
      ))}
      <div ref={chatEndRef}></div>
    </div>
  )
}
