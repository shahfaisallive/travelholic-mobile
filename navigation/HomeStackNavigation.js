import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';


// Importing screens
import Home from "../screens/home/HomeScreen"
import BookATrip from "../screens/trips/BookATripScreen"
import Forum from "../screens/forum/ForumScreen"
import PlanATrip from "../screens/planner/PlanATripScreen"
import Destinations from "../screens/destinations/DestinationsScreen"

// Importing components
import { Icon } from 'react-native-elements/dist/icons/Icon';


const Stack = createStackNavigator();

const HomeStackNavigation = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#114B5F',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerLeft: () => <TouchableOpacity
                        style={styles.menuIcon} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name='menu' color='white' size={28} />
                    </TouchableOpacity>
                }}
            />
            {/* <Stack.Screen
                name="BookATrip"
                component={BookATrip}
                options={{ title: 'Trips' }}
            />
            <Stack.Screen
                name="PlanATrip"
                component={PlanATrip}
                options={{ title: 'Trip Planner' }}
            />
            <Stack.Screen
                name="Destinations"
                component={Destinations}
                options={{ title: 'Destinations' }}
            /> */}

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    menuIcon: {
        fontSize: 30,
        marginLeft: 10
    }
})

export default HomeStackNavigation
