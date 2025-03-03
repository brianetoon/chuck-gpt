const API_BASE_URL = "https://api.chucknorris.io/jokes";

const fetchData = async (endpoint) => {
  console.log(`fetch data ran with endpont: `, endpoint)

  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Could not fetch data from ${endpoint}`);
  const data = await res.json();
  return data;
}

export const fetchCategories = () => {
  return fetchData("/categories");
} 

export const fetchJoke = (category) => {
  return category === "random" ? 
    fetchData("/random") : 
    fetchData(`/random?category=${category}`);
}