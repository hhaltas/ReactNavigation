import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
//Pages

import {Text, Pressable, View} from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';
import SideMenu from '../screens/SideMenu/index';

const Stack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

function AppDrawerStack() {
  return (
    <DrawerStack.Navigator
      drawerContent={props => <DrawerView {...props} />}
      screenOptions={({navigation}) => ({
        headerLeft: props => (
          <Pressable onPress={navigation.toggleDrawer}>
            <Text>LEFT</Text>
          </Pressable>
        ),
        headerTitleAlign: 'center',
        headerTitle: () => (
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              flex: 1,
              flexDirection: 'row',
            }}>
            <Text>TİTLE</Text>
          </View>
        ),
        headerRight: ({props}) => (
          <Pressable onPress={navigation.toggleDrawer}>
            <Text>RİGHT</Text>
          </Pressable>
        ),
      })}>
      <DrawerStack.Screen name="AppBottomStack" component={AppBottomStack} />
    </DrawerStack.Navigator>
  );
}

function DrawerView(navigation) {
  return <SideMenu navigation={navigation} />;
}

// Bottom Stack Part

function AppBottomStack() {
  return <BottomTabNavigator />;
}

export const goHomeNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppDrawerStack"
        screenOptions={{headerShown: false, animationEnabled: false}}>
        <Stack.Screen
          name="AppDrawerStack"
          component={AppDrawerStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const [isSigned, setIsSigned] = useState(null);
  useEffect(() => {}, []);
  return isSigned ? goHomeNavigation() : goHomeNavigation();
}
