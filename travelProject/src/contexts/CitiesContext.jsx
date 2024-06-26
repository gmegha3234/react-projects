
import { createContext, useState, useEffect, useContext } from "react";
const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity,setCurrentCity] = useState([]);


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
  async function getCity(id) {
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      alert("There is some problem loading data" + err);
    } finally {
      setIsLoading(false);
    }
    

  }
  return <CitiesContext.Provider value={{
    cities,
    isLoading,
    currentCity,
    getCity
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
