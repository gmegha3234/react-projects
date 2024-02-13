import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
export default function CountriesList({ cities, isLoading }) {
    

  if (isLoading) return <Spinner></Spinner>;
  if (!cities.length)
    return (
      <Message message="Add a new city by clicking on a city on a map"></Message>
    );
    const countries=cities.reduce((arr,city)=>{
        if(!arr.map((el)=>el.country).includes(city.country)){
            return [...arr,{country:city.country,emoji:city.emoji}]
        }
        else{
            return arr;
        }
    },[])
  return (
    <ul className={styles.countryList}>
      {countries.map((country)=><CountryItem country={country} key={country.country}/>)}
    </ul>
  );
}
