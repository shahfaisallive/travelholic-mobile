import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HTML from "react-native-render-html";


const Itinerary = ({ trip }) => {
    const itinerary = trip.itinerary

    // console.log(itinerary)

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Detailed Itinerary</Text>

            {!itinerary ? null : itinerary.map(item => (
                <View key={item._id}>
                    <Text style={styles.dayHeading}>Day {item.day}:</Text>
                    <HTML source={{ html: item.description }} baseFontStyle={styles.description} />
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
