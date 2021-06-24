import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';


// Importing screens
import ProfileScreen from "../screens/profile/ProfileScreen"
import UpdateProfileScreen from '../screens/profile/UpdateProfileScreen';

// Importing components
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Stack = createStackNavigator();

const ProfileStackNavigation = ({ navigation }) => {

    const homeButton = () => <TouchableOpacity
        onPress={() => navigation.navigate("Home")}>
        <Icon name='home' color='white' size={26} style={{ marginRight: 10 }} />
    </TouchableOpacity>

    return (
        <Stack.Navigator
            initialRouteName='Profile'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#114B5F',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',

            }}
        >
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    headerLeft: () => <TouchableOpacity
                        style={styles.menuIcon} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name='menu' color='white' size={28} />
                    </TouchableOpacity>,
                    headerRight: homeButton,
                }}
            />

            <Stack.Screen
                name="UpdateProfile"
                component={UpdateProfileScreen}
                options={{
                    title: 'Update Profile',
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

export default ProfileStackNavigation
