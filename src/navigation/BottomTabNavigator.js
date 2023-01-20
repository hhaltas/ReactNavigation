import React, {useEffect, useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//Stack Register
import LoginScreen from '../screens/User/Login/index';
import RegisterScreen from '../screens/User/Register';
//Stack HOme
import HomeScreen from '../screens/Home/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function RegisterStackNavigation() {
  const [initialRouteName, setInitialrouteName] = useState(null);
  useEffect(() => {
    setInitialrouteName('PageLogin');
  }, [initialRouteName]);
  return (
    <Stack.Navigator initialRouteName="PageLogin">
      <Stack.Screen
        name="PageLogin"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PageRegister"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStackNavigation() {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="PageHome"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Group
        name="Modal"
        screenOptions={({navigation}) => ({
          presentation: 'modal',
          headerTitle: () => (
            <View style={{}}>
              <Text>LOGO</Text>
            </View>
          ),
          headerRight: ({props}) => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', ...center}}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                {I18n.t('router.modal._2')}
              </Text>
            </Pressable>
          ),
        })}></Stack.Group>
    </Stack.Navigator>
  );
}

function AccountStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={PageAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PageProfileEdit"
        component={Page_ProfileEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PageCreditDetail"
        component={Page_CreditDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = ({route, navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: insets.bottom === 0 ? 65 : 85,
          },
          tabBarItemStyle: {
            height: 65,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigation}
          options={{
            headerShown: false,
            tabBarOptions: {
              showIcon: true,
            },
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    fontWeight: '700',
                    marginBottom: 5,
                    textTransform: 'uppercase',
                  }}>
                  Home
                </Text>
              );
            },
          }}
        />

        <Tab.Screen
          name="AccountStack"
          component={RegisterStackNavigation}
          options={{
            headerShown: false,
            tabBarOptions: {
              showIcon: true,
            },
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    fontWeight: '700',
                    marginBottom: 5,
                    textTransform: 'uppercase',
                  }}>
                  AccountStack
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
export default BottomTabNavigator;
