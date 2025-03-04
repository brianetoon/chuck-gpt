import useChuckStore from "../store/useChuckStore";
import SelectCategory from "./SelectCategory";

export default function ChatForm() {
  const { getJoke, selectedCategory, addToChats } = useChuckStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = {
      key: crypto.randomUUID(),
      type: "user",
      value: `Give me a ${selectedCategory} related Chuck joke!`,
    }
    addToChats(userMessage);
    const joke = await getJoke(selectedCategory);
    addToChats(joke);
  }

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <SelectCategory />
      <button type="submit">Submit</button>
    </form>
  )
}
