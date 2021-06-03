import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReviewSection = ({ trip }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Reviews</Text>
        </View>
    )
}

// Stylesheet
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderTopColor: 'grey',
        borderTopWidth: 2,
        borderStyle: 'solid',
        paddingBottom: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },

})

export default ReviewSection
