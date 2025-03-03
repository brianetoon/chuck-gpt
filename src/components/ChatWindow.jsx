import useChuckStore from "../store/useChuckStore";

export default function ChatWindow() {
  const { chats } = useChuckStore();

  return (
    <div className="chat-window">
      {chats.map(chat => (
        <p key={chat.id}>{chat.value}</p>
      ))}
    </div>
  )
}
