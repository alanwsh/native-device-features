import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";

function AllPlaces({route}){
    const [places, setPlaces] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused && route.params){
            setPlaces(curr => [...curr, route.params.place]);
        }
    },[isFocused, route]);
    
    return <PlacesList places={places}/>;
}

export default AllPlaces;