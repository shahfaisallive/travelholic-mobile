import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';


// Importing Screens and components
import Register from "../screens/authentication/RegisterScreen"
import Login from "../screens/authentication/LoginScreen"
import Profile from "../screens/profile/ProfileScreen"
import About from "../screens/support/About"
import Feedback from "../screens/support/Feedback"
import DrawerContent from '../components/drawerComponents/DrawerContent';


// Importing Navigations
import TabNavigation from "./TabNavigation"

const Drawer = createDrawerNavigator();


const DrawerNavigation = ({ navigation }) => {
    const homeButton = () => <TouchableOpacity
        onPress={() => {}}>
        <Icon name='home' color='white' size={26} style={{ marginRight: 10 }} />
    </TouchableOpacity>

    return (
        <Drawer.Navigator
            drawerType='slide'
            edgeWidth={100}
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{}}
        >
            <Drawer.Screen name='Home' component={TabNavigation} />
            <Drawer.Screen name='Login' component={Login}
                options={{ headerStyle: { backgroundColor: '#114B5F' }, headerShown: true, headerTintColor: '#fff', headerTitleAlign: 'center', headerRight: homeButton }} />
            <Drawer.Screen name='Register' component={Register}
                options={{ headerStyle: { backgroundColor: '#114B5F' }, headerShown: true, headerTintColor: '#fff', headerTitleAlign: 'center', headerRight: homeButton }} />
            <Drawer.Screen name='Profile' component={Profile}
                options={{ headerStyle: { backgroundColor: '#114B5F' }, headerShown: true, headerTintColor: '#fff', headerTitleAlign: 'center', headerRight: homeButton }} />
            <Drawer.Screen name='About' component={About}
                options={{ headerStyle: { backgroundColor: '#114B5F' }, headerShown: true, headerTintColor: '#fff', headerTitleAlign: 'center', headerRight: homeButton }} />
            <Drawer.Screen name='Feedback' component={Feedback}
                options={{ headerStyle: { backgroundColor: '#114B5F' }, headerShown: true, headerTintColor: '#fff', headerTitleAlign: 'center', headerRight: homeButton }} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation