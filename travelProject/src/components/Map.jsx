import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  const navigate= useNavigate();
  return (
    <div className={styles.mapContainer} onClick={() => {navigate('form')}}>
      <h1>Map</h1>
      <h1>
        Position : {lat} {lng}
      </h1>
      <button onClick={() => setSearchParam({ lat: 50, lng: 10 })}>
        Change position
      </button>
    </div>
  );
}
