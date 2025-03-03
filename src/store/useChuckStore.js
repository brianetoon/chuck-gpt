import { create } from "zustand";
import { fetchCategories, fetchJoke } from "../api/jokeService";

const useChuckStore = create((set) => ({
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

  setCategory: (category) => set({ selectedCategory: category})

}));

export default useChuckStore;