
import { createContext, useState, useEffect, useContext } from "react";
const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        console.log(data);
      } catch (err) {
        alert("There is some problem loading data" + err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return <CitiesContext.Provider value={{
    cities,
    isLoading
  }}>
    {children}
  </CitiesContext.Provider>
}
function useCities(){
    const context = useContext(CitiesContext);
    if(context==undefined) throw new Error('CitiesContext is used outside the scope of Cities Provider');
    return context;
}
export { CitiesProvider, useCities};
