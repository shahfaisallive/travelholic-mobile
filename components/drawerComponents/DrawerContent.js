import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Image, StyleSheet, View, ToastAndroid } from 'react-native'
import { Avatar, Caption, Drawer, Title } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../store/actions/userActions';


const DrawerContent = (props) => {

    const user = useSelector(state => state.user)
    const { userInfo } = user
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(userLogout())
    }
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
                    {
                        userInfo ?
                            <View style={{ flexDirection: 'column' }}>
                                <Title style={styles.title}>{userInfo.name}</Title>
                                <Caption style={styles.caption}>{userInfo.email}</Caption>
                            </View> :
                            <></>
                    }
                </View>

                <Drawer.Section>
                    {
                        userInfo ?
                            <DrawerItem
                                icon={() => (
                                    <Icon
                                        name="account-circle" color='#114B5F'
                                    />
                                )}
                                label="Profile" inactiveTintColor='#114B5F'
                                onPress={() => { props.navigation.navigate("Profile") }}
                            /> :
                            <></>
                    }

                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="group" color='#114B5F'
                            />
                        )}
                        label="About us" inactiveTintColor='#114B5F'
                        onPress={() => { props.navigation.navigate("About") }}
                    />
                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="feedback" color='#114B5F'
                            />
                        )}
                        label="Feedback" inactiveTintColor='#114B5F'
                        onPress={() => { props.navigation.navigate("Feedback") }}
                    />
                    {
                        userInfo ?
                            <>
                                <DrawerItem
                                    icon={() => (
                                        <Icon
                                            name="directions-bus" color='#114B5F'
                                        />
                                    )}
                                    label="My Trips" inactiveTintColor='#114B5F'
                                    onPress={() => { props.navigation.navigate("MyTrips") }}
                                />
                            </> :
                            <DrawerItem
                                icon={() => (
                                    <Icon
                                        name="login" color='#114B5F'
                                    />
                                )}
                                label="Login/Sign Up" inactiveTintColor='#114B5F'
                                onPress={() => { props.navigation.navigate("Authenticate", { screen: 'Authenticate' }) }}
                            />
                    }
                </Drawer.Section>
            </DrawerContentScrollView>
            {
                userInfo ?
                    <Drawer.Section style={styles.bottomDrawerSection} >

                        <DrawerItem
                            icon={() => (
                                <Icon name='settings' color='#114B5F' />
                            )}
                            label="Settings" inactiveTintColor='#114B5F'
                            onPress={() => { props.navigation.navigate("Settings") }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Icon name='logout' color='#114B5F' />
                            )}
                            label="Log out" inactiveTintColor='#114B5F'
                            onPress={logout}
                        />
                    </Drawer.Section> : <></>

            }
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
    },
})


export default DrawerContent
