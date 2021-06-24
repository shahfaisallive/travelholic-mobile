import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';


// Importing Screens and components
import About from "../screens/support/About"
import Feedback from "../screens/support/Feedback"
import DrawerContent from '../components/drawerComponents/DrawerContent';


// Importing Navigations
import TabNavigation from "./TabNavigation"
import AuthenticateStack from "./AuthenticateStackNavigation"
import ProfileStack from './ProfileStackNavigation';
import SettingsStack from './SettingsStackNavigation';

const Drawer = createDrawerNavigator();


const DrawerNavigation = ({ navigation }) => {

    return (
        <Drawer.Navigator
            drawerType='slide'
            edgeWidth={150}
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{}}
        >
            <Drawer.Screen name='Home' component={TabNavigation} />
            <Drawer.Screen name='Authenticate' component={AuthenticateStack} />
            <Drawer.Screen name='Profile' component={ProfileStack} />
            <Drawer.Screen name='About' component={About}
                options={{ headerStyle: { backgroundColor: '#114B5F' }, headerShown: true, headerTintColor: '#fff', headerTitleAlign: 'center' }} />
            <Drawer.Screen name='Feedback' component={Feedback}
                options={{ headerStyle: { backgroundColor: '#114B5F' }, headerShown: true, headerTintColor: '#fff', headerTitleAlign: 'center' }} />
            <Drawer.Screen name='Settings' component={SettingsStack} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation
