import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigation from "./DrawerNavigation"

export default function Navigation() {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>

    )
}