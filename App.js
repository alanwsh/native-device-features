import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationContainer from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar color="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="AllPlaces" 
            component={AllPlaces} 
            options={ ({navigation}) => ({
              headerRight: ({tintColor}) => <IconButton onPress={()=>{navigation.navigate('AddPlace')}} size={24} icon="add" color={tintColor}/>
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
