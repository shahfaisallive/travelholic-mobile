import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Image, StyleSheet, View } from 'react-native'
import { Avatar, Caption, Drawer, Title } from 'react-native-paper'
import { Icon } from 'react-native-elements'

const DrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerHeader}>
                    <View>
                        <Image
                            source={require("../../assets/images/logo-png.png")}
                            style={styles.logo}
                        />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Title style={styles.title}>Shah Faisal</Title>
                        <Caption style={styles.caption}>@shahfaisallive</Caption>
                    </View>
                </View>

                <Drawer.Section>
                    <DrawerItem
                        icon={() => (
                            <Icon
                             name="account-circle"
                            />
                        )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate("Profile")}}
                    />
                    <DrawerItem
                        icon={() => (
                            <Icon
                             name="group"
                            />
                        )}
                        label="About us"
                        onPress={() => {props.navigation.navigate("About")}}
                    />
                    <DrawerItem
                        icon={() => (
                            <Icon
                             name="feedback"
                            />
                        )}
                        label="Feedback"
                        onPress={() => {props.navigation.navigate("Feedback")}}
                    />
                    <DrawerItem
                        icon={() => (
                            <Icon
                             name="login"
                            />
                        )}
                        label="Login"
                        onPress={() => {props.navigation.navigate("Login")}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection} >
                <DrawerItem
                    icon={() => (
                        <Icon name='settings' />
                    )}
                    label="Settings"
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={() => (
                        <Icon name='logout' />
                    )}
                    label="Log out"
                    onPress={() => {props.navigation.navigate("Register")}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerHeader: {
        flex: 1,
        backgroundColor: '#1A936F',
        marginTop: -5,
        paddingBottom: 7
    },
    bottomDrawerSection: {
        marginBottom: 5,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    logo: {
        width: 200,
        height: 60,
        resizeMode: 'center',
        marginLeft: 35,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
        color: 'white'
    },
    caption: {
        fontSize: 13,
        lineHeight: 13,
        color: '#dcd1cb',
        textAlign: 'center',
    }
})


export default DrawerContent
