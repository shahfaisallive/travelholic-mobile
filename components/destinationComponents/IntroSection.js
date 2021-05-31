import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Button, Image, Rating } from 'react-native-elements'
import { imagePath } from '../supportComponents/axios'

const IntroSection = (props) => {
    return (
        <View>
            <View style={styles.ratingHeader}>
                <Rating type='custom' readonly ratingCount={5} imageSize={18} startingValue={props.rating} style={styles.rating} ratingColor='#1A936F' />
                <Text style={styles.ratingText}>({props.rating})</Text>
            </View>

            <Image
                source={{ uri: `${imagePath}/images/${props.titleImage}` }}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}
            />

            <View style={styles.ratingBtnView}>
                <Button title={`How much do you rate ${props.title}?`} 
                buttonStyle={styles.rateBtn}
                onPress={() => {}} />
            </View>

            <Text style={styles.heading}>Introduction</Text>
            <View >
                <Text style={styles.intro}>{props.introduction}</Text>
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
    intro: {
        fontSize: 16
    },
    image: {
        width: '100%',
        height: 260,
        resizeMode: 'cover',
        borderRadius: 10
    },
    ratingHeader: {
        flexDirection: 'row',
        marginBottom: 5
    },
    rating: {
        marginLeft: 7,
        marginTop: 6,
    },
    ratingView: {
        flexDirection: 'column',
    },
    ratingText: {
        color: '#114B5F',
        fontSize: 17,
        marginTop: 3,
        marginLeft: 5
    },
    rateBtn: {
        backgroundColor: '#1A936F',
        fontSize: 17,
        borderRadius: 10
    },
    ratingBtnView:{
        marginTop: 7
    }
})

export default IntroSection
