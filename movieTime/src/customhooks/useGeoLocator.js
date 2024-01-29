export function useGeoLocator(){
    if(navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log("no");
    }
}
function showPosition(position){
    console.log(position.coords.latitude);
     console.log(position.coords.longitude);
}