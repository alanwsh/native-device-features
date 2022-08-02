import { View, Text, FlatList, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({places}){
    return (<View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
    </View>);
}

export default PlacesList;

const styles = StyleSheet.create({
    fallbackContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fallbackText:{
        fontSize:16
    }
});