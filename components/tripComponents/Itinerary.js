import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Itinerary = ({ trip }) => {
    const itinerary = trip.itinerary

    // console.log(itinerary)

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Detailed Itinerary</Text>

            {!itinerary ? null : itinerary.map(item => (
                <View key={item._id}>
                    <Text style={styles.dayHeading}>Day {item.day}:</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2DCCE',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10
    },  
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    },
    dayHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    description: {
        fontSize: 16
    }

})

export default Itinerary
