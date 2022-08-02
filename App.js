import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from './components/UI/IconButton';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import { Colors } from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
