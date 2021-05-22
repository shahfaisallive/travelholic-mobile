import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerTitle: () => <SearchBar
                        placeholder="Search..."
                    />,
                    headerStyle: {
                        backgroundColor: '#dcf9dc',
                    },
                    headerTintColor: '#0f0f10',
                    headerLeft: () => <Icon name='menu' />,
                    headerRight: () => <Icon name='menu' />

                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Dashboard' }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ title: 'Register' }}
                />
            </Stack.Navigator> */}

            <Drawer.Navigator>
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Register" component={Register} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}