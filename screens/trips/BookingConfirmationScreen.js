import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { createBooking } from '../../store/actions/tripActions'

const BookingConfirmationScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const bookingInfo = useSelector(state => state.bookingInfo)
    const { title, name, price, email, total_price, seats, phoneNo, address, city } = bookingInfo

    const bookingDetails = useSelector(state => state.bookingDetails)
    const { loading, booking, success } = bookingDetails

    const trip = useSelector(state => state.tripDetails.trip)

    useEffect(() => {
        if (success) {
            navigation.navigate('BookingStatus', {
                bookingID: booking._id,
            })
        }
    }, [success, booking])

    const confirmBooking = () => {
        dispatch(createBooking({
            title: title,
            name: name,
            email: email,
            city: city,
            address: address,
            phoneNo: phoneNo,
            seats: seats,
            totalPrice: total_price,
            startDate: trip.start_date,
            endDate: trip.end_date
        }))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.topText}>Please confirm your order below.</Text>

            {/* Details Table */}
            <View style={styles.tableView}>
                <View style={styles.rowView}>
                    <View style={styles.leftRow}>
                        <Text style={styles.leftColText}>Trip Title:</Text>
                    </View>
                    <View style={styles.rightRow}>
                        <Text style={styles.rightColText}>{title}</Text>
                    </View>
                </View>

                <View style={styles.rowView}>
                    <View style={styles.leftRow}>
                        <Text style={styles.leftColText}>Trip Price:</Text>
                    </View>
                    <View style={styles.rightRow}>
                        <Text style={styles.rightColText}>{price}</Text>
                    </View>
                </View>

                <View style={styles.rowView}>
                    <View style={styles.leftRow}>
                        <Text style={styles.leftColText}>Name:</Text>
                    </View>
                    <View style={styles.rightRow}>
                        <Text style={styles.rightColText}>{name}</Text>
                    </View>
                </View>

                <View style={styles.rowView}>
                    <View style={styles.leftRow}>
                        <Text style={styles.leftColText}>Email:</Text>
                    </View>
                    <View style={styles.rightRow}>
                        <Text style={styles.rightColText}>{email}</Text>
                    </View>
                </View>

                <View style={styles.rowView}>
                    <View style={styles.leftRow}>
                        <Text style={styles.leftColText}>Phone No:</Text>
                    </View>
                    <View style={styles.rightRow}>
                        <Text style={styles.rightColText}>{phoneNo}</Text>
                    </View>
                </View>

                <View style={styles.rowView}>
                    <View style={styles.leftRow}>
                        <Text style={styles.leftColText}>Address:</Text>
                    </View>
                    <View style={styles.rightRow}>
                        <Text style={styles.rightColText}>{address}</Text>
                    </View>
                </View>

                <View style={styles.rowView}>
                    <View style={styles.leftRow}>
                        <Text style={styles.leftColText}>City:</Text>
                    </View>
                    <View style={styles.rightRow}>
                        <Text style={styles.rightColText}>{city}</Text>
                    </View>
                </View>

                <View style={styles.rowView}>
                    <View style={styles.leftRow}>
                        <Text style={styles.leftColText}>Seats:</Text>
                    </View>
                    <View style={styles.rightRow}>
                        <Text style={styles.rightColText}>{seats}</Text>
                    </View>
                </View>

                <View style={styles.totalRow}>
                    <View style={styles.leftRow}>
                        <Text style={styles.totalText}>TOTAL:</Text>
                    </View>
                    <View>
                        <Text style={styles.totalValue}>PKR {total_price}</Text>
                    </View>
                </View>
            </View>

            <Button title={'Confirm Booking'} onPress={confirmBooking}
                containerStyle={styles.confirmBtnCont} buttonStyle={styles.confirmBtn}
                loading={false} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    topText: {
        fontSize: 18,
    },
    tableView: {
        marginTop: 15,
        borderColor: '#DDD0D0',
        borderStyle: 'solid',
        borderWidth: 1
    },
    rowView: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#F0E5E5',
    },
    leftRow: {
        width: '30%',
    },
    leftColText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    rightColText: {
        fontSize: 16,
    },
    totalText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    totalValue: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    rightRow: {
        flex: 1
    },
    totalRow: {
        backgroundColor: '#114B5F',
        flexDirection: 'row',
        padding: 12,
    },
    confirmBtnCont: {
        width: '100%',
        marginTop: 30,
        alignSelf: 'center',
    },
    confirmBtn: {
        backgroundColor: '#1A936F',
        height: 45
    }

})

export default BookingConfirmationScreen
