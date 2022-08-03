import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from './components/UI/IconButton';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import Map from './screens/Map';

import { Colors } from './constants/colors';
import { useEffect, useState } from 'react';
import { init } from './utils/database';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {

  const [dbInitialized, setDbInitialized] = useState();

  useEffect(() => {
    init().then(() => {
        setDbInitialized(true);
    }).catch((err) =>{
      console.log(err);
    });
  },[]);

  if(!dbInitialized){
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar color="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{ backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700}
        }}>
          <Stack.Screen 
            name="AllPlaces" 
            component={AllPlaces}
            options={ ({navigation}) => ({
              headerRight: ({tintColor}) => <IconButton onPress={()=>{navigation.navigate('AddPlace')}} size={24} icon="add" color={tintColor}/>,
              title:"Your Favourite Places" 
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} options={{title:'Add A New Place'}}/>
          <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
