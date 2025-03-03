import useChuckStore from "../store/useChuckStore";
import SelectCategory from "./SelectCategory";

export default function ChatForm() {
  const { getJoke, selectedCategory, addToChats } = useChuckStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const joke = await getJoke(selectedCategory);
    addToChats(joke);
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectCategory />
      <button type="submit">Submit</button>
    </form>
  )
}
