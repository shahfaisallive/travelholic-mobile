import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';


// Importing screens
import Planner from "../screens/planner/PlanATripScreen"
import RoutePossibility from '../screens/planner/RoutePossibilityScreen'

// Importing components
import { Icon } from 'react-native-elements/dist/icons/Icon';


const Stack = createStackNavigator();

const PlannerStackNavigation = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName='Planner'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#114B5F',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',

            }}
        >
            <Stack.Screen
                name="Planner"
                component={Planner}
                options={{
                    title: 'Plan a Trip',
                    headerLeft: () => <TouchableOpacity
                        style={styles.menuIcon} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name='menu' color='white' size={28} />
                    </TouchableOpacity>
                }}
            />

            <Stack.Screen
                name="RoutePossibility"
                component={RoutePossibility}
                options={{
                    title: 'Check Routes'
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

export default PlannerStackNavigation
