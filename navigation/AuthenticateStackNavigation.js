import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'



// Importing screens
import Authenticate from "../screens/authentication/LoginScreen"
import Register from "../screens/authentication/RegisterScreen"
import HomeScreen from "../screens/home/HomeScreen"
import TabNavigation from "./TabNavigation"

// Importing components
import { Icon } from 'react-native-elements/dist/icons/Icon';


const Stack = createStackNavigator();

const AuthenticateStackNavigation = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const { loading, userInfo, error } = user


    const homeButton = () => <TouchableOpacity
        onPress={() => navigation.navigate("Home") }>
        <Icon name='home' color='white' size={26} style={{ marginRight: 10 }} />
    </TouchableOpacity>

    return (
        <Stack.Navigator
            initialRouteName='Authenticate'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#114B5F',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',

            }}
        >
            
            {userInfo == null ? (
                // No token found, user isn't signed in
                <Stack.Screen
                name="Authenticate"
                component={Authenticate}
                options={{
                    title: 'Login',
                    headerLeft: () => <TouchableOpacity
                        style={styles.menuIcon} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name='menu' color='white' size={28} />
                    </TouchableOpacity>,
                    headerRight: homeButton
                }}
            />
                ) : (
                // User is signed in
                <Stack.Screen name="Home" add options= {{
                    headerShown: false
                  }} component={TabNavigation} />
                )
            }
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Create Account',
                    headerRight: homeButton
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    menuIcon: {
        fontSize: 30,
        marginLeft: 10
    }
})

export default AuthenticateStackNavigation
