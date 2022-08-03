import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../utils/database";

function AllPlaces({route}){
    const [places, setPlaces] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadPlaces(){
            const places = await fetchPlaces();
            setPlaces(places);
        }
        if(isFocused){
            loadPlaces();
        }
    },[isFocused]);
    
    return <PlacesList places={places}/>;
}

export default AllPlaces;