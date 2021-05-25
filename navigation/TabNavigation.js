import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Icon } from 'react-native-elements/dist/icons/Icon';


// Importing navigation stacks
import HomeStack from "./HomeStackNavigation"
import TripStack from "./TripStackNavigation"
import DestinationsStack from "./DestinationsStackNavigation"
import PlannerStack from "./PlannerStackNavigation"
import ForumStack from "./ForumStackNavigation"

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor="#1A936F"
            screenOptions={{
                tabBarColor: '#114B5F'
            }}
        >
            <Tab.Screen
                name="Destinations" component={DestinationsStack}
                options={{
                    tabBarLabel: 'Destination',
                    tabBarIcon: () => (
                        <Icon name="landscape" color="#fff" />)
                }} />
            <Tab.Screen
                name="PlanATrip" component={PlannerStack}
                options={{
                    tabBarLabel: 'Planner',
                    tabBarIcon: () => (
                        <Icon name="event" color='#fff' />)
                }} />
            <Tab.Screen
                name="Home" component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Icon name="home" color='#fff' />)
                }} />
            <Tab.Screen
                name="BookATrip" component={TripStack}
                options={{
                    tabBarLabel: 'Trips',
                    tabBarIcon: () => (
                        <Icon name="directions-bus" color='#fff' />)
                }} />
            <Tab.Screen
                name="Forum" component={ForumStack}
                options={{
                    tabBarLabel: 'Forum',
                    tabBarIcon: () => (
                        <Icon name="forum" color='#fff' />)
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigation
