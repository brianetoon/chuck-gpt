import { create } from "zustand";
import { fetchCategories, fetchJoke } from "../api/jokeService";

const useChuckStore = create((set) => ({
  joke: {},
  chats: [],
  categories: [],
  selectedCategory: "random",
  loading: false,
  error: null,

  getCategories: async () => {
    try {
      const categories = await fetchCategories();
      set({ categories })
    } catch(error) {
      set({ error: error.message })
    }
  },

  setCategory: (category) => set({ selectedCategory: category}),

  getJoke: async (category) => {
    try {
      const newJoke = await fetchJoke(category);
      set({ joke: newJoke });
      return newJoke;
    } catch(error) {
      set({ error: error.message });
    }
  },

  addToChats: (chat) => {
    if (!chat) return;
    set((state) => ({
      chats: [...state.chats, chat]
    }))
  }

}));

export default useChuckStore;