import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HTML from "react-native-render-html";


const GuidelinesSection = (props) => {

    return (
        <View>
            <Text style={styles.heading}>Guidelines</Text>
            <View >
                {/* <Text style={styles.guidelines}>{props.guidelines}</Text> */}
                <HTML source={{ html: props.guidelines }} baseFontStyle={styles.guidelines} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    guidelines: {
        fontSize: 16
    },
})

export default GuidelinesSection
