import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import { Button, Card, Image, Rating } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { imagePath } from '../supportComponents/axios'
import HTML from "react-native-render-html";

const TripIntro = ({ trip, navigation, loading }) => {
    const [startDay, setStartDay] = useState(trip.start_date.substring(8, 10))
    const [endDay, setEndDay] = useState(trip.end_date.substring(8, 10))
    const [startMonth, setStartMonth] = useState(trip.start_date.substring(5, 7))
    const [endMonth, setEndMonth] = useState(trip.end_date.substring(5, 7))

    let s_month
    let e_month

    switch (startMonth) {
        case '01':
            s_month = 'Jan'
            break;
        case '02':
            s_month = 'Feb'
            break;
        case '03':
            s_month = 'Mar'
            break;
        case '04':
            s_month = 'Apr'
            break;
        case '05':
            s_month = 'May'
            break;
        case '06':
            s_month = 'Jun'
            break;
        case '07':
            s_month = 'Jul'
            break;
        case '08':
            s_month = 'Aug'
            break;
        case '09':
            s_month = 'Sep'
            break;
        case '10':
            s_month = 'Oct'
            break;
        case '11':
            s_month = 'Nov'
            break;
        case '12':
            s_month = 'Dec'
            break;
        default: s_month = 'NaN'
            break;
    }

    switch (endMonth) {
        case '01':
            e_month = 'Jan'
            break;
        case '02':
            e_month = 'Feb'
            break;
        case '03':
            e_month = 'Mar'
            break;
        case '04':
            e_month = 'Apr'
            break;
        case '05':
            e_month = 'May'
            break;
        case '06':
            e_month = 'Jun'
            break;
        case '07':
            e_month = 'Jul'
            break;
        case '08':
            e_month = 'Aug'
            break;
        case '09':
            e_month = 'Sep'
            break;
        case '10':
            e_month = 'Oct'
            break;
        case '11':
            e_month = 'Nov'
            break;
        case '12':
            e_month = 'Dec'
            break;
        default: e_month = 'NaN'
            break;
    }

    const userInfo = useSelector(state => state.user.userInfo)

    const proceedToBooking = () => {
        if (userInfo) {
            navigation.navigate('BookingForm')
        } else {
            navigation.navigate('Authenticate')
        }
    }

    return (
        <View>
            <Image
                source={{ uri: `${imagePath}/trips/${trip.display_image}` }}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.headerView}>
                <Text style={styles.title}>{trip.title}</Text>
                <Rating type='custom' style={styles.rating} readonly ratingCount={5} imageSize={16} startingValue={trip.rating} ratingColor='#1A936F' />

                <Text style={styles.priceText}>{`PKR ${trip.price}`}</Text>

                <Text style={styles.dateText}>{`${startDay} ${s_month} - ${endDay} ${e_month}`}</Text>

                <Button title='Proceed to Booking' buttonStyle={styles.button}
                    onPress={proceedToBooking} />
            </View>

            <Text style={styles.heading}>Description</Text>
            <View >
                <HTML source={{ html: trip.description }} baseFontStyle={styles.intro} />
            </View>

        </View>
    )
}


// Stylesheet
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    headerView: {
        backgroundColor: 'white',
        paddingTop: 7
    },
    intro: {
        fontSize: 16
    },
    image: {
        width: '100%',
        height: 260,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 7

    },
    priceText: {
        fontSize: 18,
        marginTop: 5,
        color: '#114B5F',
        marginLeft: 7,
        fontWeight: 'bold'
    },
    dateText: {
        fontSize: 16,
        marginTop: 5,
        color: 'grey',
        marginLeft: 7
    },
    rating: {
        alignItems: 'flex-start',
        marginLeft: 7,
        marginTop: 5,
    },
    button: {
        backgroundColor: '#1A936F',
        borderRadius: 7,
        marginTop: 10,
    },
})

export default TripIntro
