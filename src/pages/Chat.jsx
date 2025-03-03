import SelectCategory from "../components/SelectCategory";
import useChuckStore from "../store/useChuckStore";

export default function Chat() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const joke = await fetchJoke(currentCategory);
    console.log(joke)
  }

  return (
    <div className="chat">
      <h2>Chat with Chuck</h2>
      <form onSubmit={handleSubmit}>
        <SelectCategory />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
