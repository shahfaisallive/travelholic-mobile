import React, { useState } from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import { Button, Card, Image, Rating } from 'react-native-elements'
import { imagePath } from '../supportComponents/axios'

const TripIntro = ({ trip, navigation }) => {

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

                <Button title='Proceed to Booking' buttonStyle={styles.button}
                    onPress={() => navigation.navigate('BookingForm')} />
            </View>

            <Text style={styles.heading}>Description</Text>
            <View >
                <Text style={styles.intro}>{trip.description}</Text>
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
