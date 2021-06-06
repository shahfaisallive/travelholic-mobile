import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';


// Importing screens
import Trips from "../screens/trips/BookATripScreen"
import TripDetails from "../screens/trips/TripDetailsScreen"
import BookingForm from "../screens/trips/BookingFormScreen"
import BookingConfirmation from "../screens/trips/BookingConfirmationScreen"
import BookingStatusScreen from '../screens/trips/BookingStatusScreen';


// Importing components
import { Icon } from 'react-native-elements/dist/icons/Icon';


const Stack = createStackNavigator();

const TripStackNavigation = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName='Trips'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#114B5F',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',

            }}
        >
            <Stack.Screen
                name="Trips"
                component={Trips}
                options={{
                    title: 'Trips',
                    headerLeft: () => <TouchableOpacity
                        style={styles.menuIcon} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name='menu' color='white' size={28} />
                    </TouchableOpacity>
                }}
            />

            <Stack.Screen
                name="TripDetails"
                component={TripDetails}
                options={{
                    title: 'Details'
                }}
            />

            <Stack.Screen
                name="BookingForm"
                component={BookingForm}
                options={{
                    title: 'Booking Form'
                }}
            />

            <Stack.Screen
                name="BookingConfirmation"
                component={BookingConfirmation}
                options={{
                    title: 'Booking Confirmation'
                }}
            />

            <Stack.Screen
                name="BookingStatus"
                component={BookingStatusScreen}
                options={{
                    title: 'Booking Status'
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

export default TripStackNavigation
