// App.tsx
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, View, Text, Image } from 'react-native';
import AddProductScreen from './screens/AddProductScreen';
import ShowRecordsScreen from './screens/ShowRecordsScreen';
import EditDeleteRecordScreen from './screens/EditDeleteRecordScreen';
import ListaScreenDos from './screens/Lista2Screen';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const WelcomeScreen = ({ navigation} :any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontSize: 30}}>Bienvenido, Gabriel!</Text>
    <Image source={require('../Prueba1/assets/chayanne.jpg')} style={{width: 300, height:300, margin: 20, }}/>
    <Button title="Menú Principal" onPress={() => navigation.navigate('Tabs')} />
  </View>
);

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen</Text>
  </View>
);

const BottomTabs = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Add Product" component={AddProductScreen} />
    <BottomTab.Screen name="Records" component={ShowRecordsScreen} />
    <BottomTab.Screen name="Edit/Delete" component={EditDeleteRecordScreen} />
    <BottomTab.Screen name="API" component={ListaScreenDos} />
  </BottomTab.Navigator>
);



const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Tabs" component={BottomTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
