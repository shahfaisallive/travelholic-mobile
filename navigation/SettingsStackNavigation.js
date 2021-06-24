import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

// Importing screens
import SettingsScreen from '../screens/support/SettingsScreen';
import ChangePasswordScreen from '../screens/support/ChangePasswordScreen';

// Importing components
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Stack = createStackNavigator();

const SettingsStackNavigation = ({ navigation }) => {

    const homeButton = () => <TouchableOpacity
        onPress={() => navigation.navigate("Home")}>
        <Icon name='home' color='white' size={26} style={{ marginRight: 10 }} />
    </TouchableOpacity>

    return (
        <Stack.Navigator
            initialRouteName='Settings'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#114B5F',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',

            }}
        >
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    headerLeft: () => <TouchableOpacity
                        style={styles.menuIcon} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name='menu' color='white' size={28} />
                    </TouchableOpacity>,
                    headerRight: homeButton,
                }}
            />

            <Stack.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={{
                    title: 'Change Password',
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

export default SettingsStackNavigation
