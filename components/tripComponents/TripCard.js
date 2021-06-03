import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, Icon, Rating } from 'react-native-elements'
import { imagePath } from '../../components/supportComponents/axios'

const TripCard = (props) => {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Card.Image source={{ uri: `${imagePath}/trips/${props.titleImage}` }} style={styles.image} />
                {/* <Card.Image source={require("../../assets/images/demo2.jpg")} style={styles.image} /> */}

                <View style={styles.cardHeader}>
                    <Card.Title style={styles.title}>{props.title}</Card.Title>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Rating type='custom' readonly ratingCount={5} imageSize={16} startingValue={props.rating} ratingColor='#1A936F' />
                        {/* <Text style={styles.subText}>({props.reviews.length()})</Text> */}
                    </View>

                    <Card.Title style={styles.priceText}>{`PKR ${props.price}`}</Card.Title>
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
