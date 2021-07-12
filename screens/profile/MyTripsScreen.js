import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button, Divider, Input } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBookings } from '../../store/actions/tripActions'

const MyTripsScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.user.userInfo)
    const userBookings = useSelector(state => state.userBookings)
    const { loading, error, bookings } = userBookings

    useEffect(() => {
        dispatch(getUserBookings(userInfo._id))
    }, [dispatch, userInfo._id, bookings])

    return ( loading ? (<ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />) : (
        <View style={styles.container}>
        {!bookings ? (
            <View style={styles.noBookingView}>
                <Text style={{ fontSize: 18 }}>You have not booked any trip yet</Text>
            </View>
        ) : (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={bookings}
                keyExtractor={item => item._id}
                initialNumToRender={4}
                renderItem={itemData => (
                    <TouchableOpacity onPress={() => navigation.navigate('BookingStatus', {
                        bookingID: itemData.item._id
                    })}>
                        <View style={styles.singleBookedTripView}>
                            <Text style={styles.titleText}>{itemData.item.title}</Text>
                            <Text style={styles.priceText}>PKR {itemData.item.totalPrice}</Text>
                            <Divider />
                            <View style={styles.bottomInfoView}>
                                <View style={styles.dateView}>
                                    <Text style={styles.dateText}>Created on: {itemData.item.createdAt.substring(0, 10)}</Text>
                                </View>
                                <View style={styles.statusView}>
                                    {itemData.item.booking_status === 'confirmed' ?
                                        <Text style={styles.statusTextGreen}>{itemData.item.booking_status}</Text> :
                                        itemData.item.booking_status === 'pending' ?
                                            <Text style={styles.statusText}>{itemData.item.booking_status}</Text> :
                                            <Text style={styles.statusTextRed}>{itemData.item.booking_status}</Text>}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        )}
    </View>
    )
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10
    },
    noBookingView: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#CDEADA'
    },
    singleBookedTripView: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        backgroundColor: '#CDEADA',
        marginBottom: 10
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 7,
        color: '#114B5F',
        marginBottom: 10
    },
    bottomInfoView: {
        flexDirection: 'row',
        marginTop: 5
    },
    dateView: {
        width: '50%'
    },
    statusView: {
        width: '50%',
        alignItems: 'flex-end'
    },
    dateText: {
        fontSize: 14
    },
    statusTextRed: {
        fontWeight: 'bold',
        marginRight: 5,
        fontStyle: 'italic',
        color: 'red',
        fontSize: 15
    },
    statusTextGreen: {
        fontWeight: 'bold',
        marginRight: 5,
        fontStyle: 'italic',
        color: 'green',
        fontSize: 15
    },
    statusText: {
        fontWeight: 'bold',
        marginRight: 5,
        fontStyle: 'italic',
        color: 'black',
        fontSize: 15
    }
})


export default MyTripsScreen
