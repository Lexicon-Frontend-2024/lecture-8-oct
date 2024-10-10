import { useContext, useEffect } from "react"
import { DogsContext } from "./context/dogsContext"
import DogCard from "./Components/DogCard";

export default function App() {
  const { dogs, updateDogs } = useContext(DogsContext);

  async function fetchAPI() {
    const res = await fetch("https://majazocom.github.io/Data/dogs.json");
    const data = await res.json();
    return data;
  }
  useEffect(() => {
    const fetchData = async () => {
      const fromAPI = await fetchAPI();
      updateDogs('set', fromAPI);
    };
    fetchData();
  }, []);

  return (
    <>
      {
        dogs && dogs.map(() => <DogCard />)
      }
    </>
  )
}
