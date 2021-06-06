import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector } from 'react-redux'

const BookingConfirmationScreen = ({ navigation }) => {

    const bookingInfo = useSelector(state => state.bookingInfo)
    const { title, name, price, email, total_price, seats, phoneNo, address, city } = bookingInfo

    const confirmBooking = () => {
        navigation.navigate('BookingStatus')
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
        backgroundColor: '#1A936F',
        flexDirection: 'row',
        padding: 12,
    },
    confirmBtnCont: {
        width: '95%',
        marginTop: 30,
        alignSelf: 'center'
    },
    confirmBtn: {
        backgroundColor: '#114B5F'
    }

})

export default BookingConfirmationScreen
