import ChatForm from "../components/ChatForm";
import ChatWindow from "../components/ChatWindow";

export default function Chat() {
  return (
    <div className="chat">
      <ChatWindow />
      <ChatForm />
    </div>
  )
}
