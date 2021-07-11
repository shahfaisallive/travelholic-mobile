import React, { memo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, Icon, Rating } from 'react-native-elements'
import { imagePath } from '../../components/supportComponents/axios'

const TripCard = (props) => {
    const [startDay, setStartDay] = useState(props.startDate.substring(8, 10))
    const [endDay, setEndDay] = useState(props.endDate.substring(8, 10))
    const [startMonth, setStartMonth] = useState(props.startDate.substring(5, 7))
    const [endMonth, setEndMonth] = useState(props.endDate.substring(5, 7))

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

    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Card.Image source={{ uri: `${imagePath}/trips/${props.titleImage}` }} style={styles.image} />
                {/* <Card.Image source={require("../../assets/images/demo2.jpg")} style={styles.image} /> */}

                <View style={styles.cardHeader}>
                    <Card.Title style={styles.title}>{props.title}</Card.Title>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Rating type='custom' readonly ratingCount={5} imageSize={16} startingValue={props.rating} ratingColor='#1A936F' />
                        <Text style={styles.subText}>({props.reviews.length})</Text>
                    </View>

                    <Card.Title style={styles.priceText}>{`PKR ${props.price}`}</Card.Title>

                    <Card.Title style={styles.dateText}>{`${startDay} ${s_month} - ${endDay} ${e_month}`}</Card.Title>
                </View>

                <Button title='Book Now' buttonStyle={styles.button}
                    onPress={() => props.navigation.navigate('TripDetails', {
                        tripID: props.id,
                        title: props.title
                    })}
                    icon={() => <Icon name='shopping-cart' color='white' iconStyle={{ marginRight: 5 }} />} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 10
    },
    card: {
        padding: 0,
        borderRadius: 10,
    },
    cardHeader: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        marginTop: 10
    },
    priceText: {
        fontSize: 18,
        marginTop: 10,
        color: '#114B5F'
    },
    dateText: {
        fontSize: 16,
        color: 'grey'
    },
    image: {
        borderRadius: 10,
        resizeMode: 'cover',
        width: '100%',
        height: 270
    },
    button: {
        backgroundColor: '#1A936F',
        borderRadius: 7,
    },
    subText: {
        fontSize: 16,
        marginLeft: 6,
    }
})

export default memo(TripCard)
