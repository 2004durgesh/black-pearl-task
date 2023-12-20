import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapScreen from './src/MapScreen';
import QRScanner from './src/QRScanner';
import tw from 'twrnc';



const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#DB202C',
            tabBarInactiveTintColor: '#fff',
            tabBarShowLabel: true,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 'bold',
              marginBottom: 4,
            },
            tabBarItemStyle: {
              justifyContent: 'center',
            },
            tabBarStyle: {
              height: 60,  // Adjust the height as needed
              borderTopColor: '#fff',
              borderTopWidth: 2,
              backgroundColor: '#000',
            },
          }}>
          <Tab.Screen
            name="MapScreen"
            component={MapScreen}
            options={({ route }) => ({
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="map-outline" size={25} color='black' />
              ),
            })}
          />
          <Tab.Screen
            name="QRScanner"
            component={QRScanner}
            options={({ route }) => ({
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="qr-code-outline" size={25} color='black' />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );

}
