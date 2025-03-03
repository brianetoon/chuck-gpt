import { useEffect, useState } from "react";
import { fetchCategories, fetchJoke } from "../services/jokeService";

export default function Chat() {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("random")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const joke = await fetchJoke(currentCategory);
    console.log(joke)
  }

  useEffect(() => {
    const getCategories = async () => {
      const options = await fetchCategories();
      setCategories(options);
    }

    getCategories();
  }, [])

  return (
    <div className="chat">
      <h2>Chat with Chuck</h2>
      <form onSubmit={handleSubmit}>
        <select name="options" onChange={(e) => setCurrentCategory(e.target.value)}>
          <option value="random">anything</option>
          {categories.length > 0 && categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
