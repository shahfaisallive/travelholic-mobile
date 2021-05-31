import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HistorySection = (props) => {
    return (
        <View>
            <Text style={styles.heading}>History</Text>
            <View >
                <Text style={styles.history}>{props.history}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    history: {
        fontSize: 16
    },
})

export default HistorySection
