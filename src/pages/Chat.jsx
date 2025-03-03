import SelectCategory from "../components/SelectCategory";
import useChuckStore from "../store/useChuckStore";

export default function Chat() {

  const { getJoke, selectedCategory, addToChats, chats } = useChuckStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const joke = await getJoke(selectedCategory);
    addToChats(joke);
  }

  return (
    <div className="chat">

      {chats.map(chat => (
        <p key={chat.id}>{chat.value}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <SelectCategory />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
