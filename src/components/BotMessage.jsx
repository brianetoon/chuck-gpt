
export default function BotMessage({ chat }) {
  return (
    <div className="bot-message">
      <img src={chat.icon_url} alt="Chuck Norris icon" />
      <p>{ chat.value }</p>
    </div>
  )
}
