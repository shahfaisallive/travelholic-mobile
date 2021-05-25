import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';


// Importing screens
import Destinations from "../screens/destinations/DestinationsScreen"
import DestinationDetails from "../screens/destinations/DestinationDetailsScreen"

// Importing components
import { Icon } from 'react-native-elements/dist/icons/Icon';


const Stack = createStackNavigator();

const DestinationsStackNavigation = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName='Destinations'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#114B5F',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',

            }}
        >
            <Stack.Screen
                name="Destinations"
                component={Destinations}
                options={{
                    title: 'Destinations',
                    headerLeft: () => <TouchableOpacity
                        style={styles.menuIcon} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name='menu' color='white' size={28} />
                    </TouchableOpacity>
                }}
            />

            <Stack.Screen
                name="DestinationDetails"
                component={DestinationDetails}
                options={{
                    title: 'Details'
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

export default DestinationsStackNavigation
