import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView, StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native'
import { Divider } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { getBookedTrip, savePaymentMethod } from '../../store/actions/tripActions'

const BookingStatusScreen = ({ route }) => {
    const bookingID = route.params.bookingID

    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.user.userInfo)

    const bookedTrip = useSelector(state => state.bookedTrip)
    const { loading, error, bookedTrip: booking } = bookedTrip

    const paymentMethod = useSelector(state => state.paymentMethod.paymentMethod)

    useEffect(() => {
        dispatch(getBookedTrip(bookingID))
    }, [dispatch])

    const setPaymentToStripe = () => {
        dispatch(savePaymentMethod('stripe'))
    }
    const setPaymentToCod = () => {
        dispatch(savePaymentMethod('cod'))
    }

    return (loading ? (<ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />) : (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.topView}>
                {!booking.booking_confirmed ? (
                    <>
                        {!booking.isPaid ? (
                            <>
                                <Text style={styles.text1}>
                                    Thank you for booking your trip with us
                                </Text>
                                <Text>
                                    Please proceed with the payment to confirm your booking
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text style={styles.text1}>
                                    Your Payment is Complete
                                </Text>
                                {booking.booking_confirmed ? (
                                    <Text>
                                        Your booking has been confirmed
                                    </Text>
                                ) : (
                                    <Text>
                                        Your booking will be confirmed shortly
                                    </Text>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <Text style={styles.text1}>
                            Your booking has been confirmed
                        </Text>
                    </>
                )}

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={styles.text2}>Booking ID: </Text>
                    <Text>{bookingID}</Text>
                </View>
            </View>


            {/* Details View */}
            <View style={styles.bookingDetailView}>
                <Text style={styles.text3}>Booking Details</Text>

                {/* TABLE */}
                <View style={styles.tableView}>
                    <View style={styles.rowView}>
                        <View style={styles.leftRow}>
                            <Text style={styles.leftColText}>Title:</Text>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.rightColText}>{booking.title}</Text>
                        </View>
                    </View>

                    <View style={styles.rowView}>
                        <View style={styles.leftRow}>
                            <Text style={styles.leftColText}>ID:</Text>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.rightColText}>{booking._id}</Text>
                        </View>
                    </View>

                    <View style={styles.rowView}>
                        <View style={styles.leftRow}>
                            <Text style={styles.leftColText}>Name:</Text>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.rightColText}>{booking.name}</Text>
                        </View>
                    </View>

                    <View style={styles.rowView}>
                        <View style={styles.leftRow}>
                            <Text style={styles.leftColText}>Address:</Text>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.rightColText}>{booking.address}</Text>
                        </View>
                    </View>

                    <View style={styles.rowView}>
                        <View style={styles.leftRow}>
                            <Text style={styles.leftColText}>City:</Text>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.rightColText}>{booking.city}</Text>
                        </View>
                    </View>

                    <View style={styles.rowView}>
                        <View style={styles.leftRow}>
                            <Text style={styles.leftColText}>Phone No:</Text>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.rightColText}>{booking.phoneNo}</Text>
                        </View>
                    </View>

                    <View style={styles.rowView}>
                        <View style={styles.leftRow}>
                            <Text style={styles.leftColText}>Seats:</Text>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.rightColText}>{booking.seats}</Text>
                        </View>
                    </View>

                    <View style={styles.rowView}>
                        <View style={styles.leftRow}>
                            <Text style={styles.leftColText}>Total Price:</Text>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.rightColText}>{booking.totalPrice} PKR</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.text3}>Payment</Text>
                <View style={styles.rowView}>
                    {booking.isPaid ? <Text style={styles.greenText}>PAID</Text> : <Text style={styles.redText}>PENDING</Text>}
                </View>

                <Text style={styles.text3}>Booking Status</Text>
                <View style={styles.rowView}>
                    {booking.booking_confirmed ? <Text style={styles.greenText}>CONFIRMED</Text> : <Text style={styles.redText}>PENDING</Text>}
                </View>
            </View>

            <View style={styles.bookingDetailView}>
                <Text style={styles.text3}>Payment Procedure</Text>
                <View style={styles.paymentMethodView}>
                    <TouchableOpacity onPress={setPaymentToStripe} style={styles.payMethodLogoView}>
                        <Image source={require('../../assets/images/stripe.png')} style={styles.paymentMethodLogo} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={setPaymentToCod} style={styles.payMethodLogoView}>
                        <Image source={require('../../assets/images/cod.png')} style={styles.paymentMethodLogo} />
                    </TouchableOpacity>
                </View>

                {paymentMethod === 'stripe' && !booking.isPaid ? (
                    <View style={styles.paymentFormView}>
                        <Text>Stripe form</Text>
                    </View>
                ) : paymentMethod === 'cod' && !booking.isPaid ? (
                    <View style={styles.paymentFormView}>
                        <Text>Cash On Delivery</Text>
                    </View>
                ) : !booking.isPaid ? (
                    <View style={styles.paymentFormView}>
                        <Text>Please select a payment method to proceed payment</Text>
                    </View>
                ) : (
                    <View style={styles.paymentFormView}>
                        <Text>Your payment is complete</Text>
                    </View>
                )}

            </View>

        </ScrollView>
    )
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    topView: {
        alignItems: 'center'
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A936F',
        marginBottom: 4
    },
    text2: {
        fontWeight: 'bold',
    },
    text3: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 7
    },
    bookingDetailView: {
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingBottom: 10,
    },
    tableView: {
        borderRadius: 5,
    },
    rowView: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#F5F0F1',
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

    rightRow: {
        flex: 1
    },
    greenText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'green'
    },
    redText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red'
    },
    paymentMethodView: {
        flexDirection: 'row',
        flex: 1,
    },
    paymentMethodLogo: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    payMethodLogoView: {
        width: '40%',
        height: 80,
        borderWidth: 0.6,
        borderColor: 'grey',
        alignItems: 'center',
        borderRadius: 6,
        marginRight: 5,
        backgroundColor: '#F5F0F1'
    },
    paymentFormView: {
        height: 100,
        backgroundColor: '#F5F0F1',
        marginTop: 10,
        padding: 10,
        marginBottom: 20
    }

})

export default BookingStatusScreen
