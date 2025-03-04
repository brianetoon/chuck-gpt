import { useEffect } from "react";
import useChuckStore from "../store/useChuckStore";

export default function SelectCategory() {
  const { categories, getCategories, setCategory } = useChuckStore();

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <select 
      className="chat-select" 
      name="options" 
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Select a category</option>
      {categories.length > 0 && categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  )
}
