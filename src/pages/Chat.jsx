import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");

  const getChuck = async () => {
    try {
      const res = await fetch(`https://api.chucknorris.io/jokes/random`);
      const data = await res.json();
      console.log(data);
    } catch(err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
    getChuck()
  }

  return (
    <div>
      <h2>Chat</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}
