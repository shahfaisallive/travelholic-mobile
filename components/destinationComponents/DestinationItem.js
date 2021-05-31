import React, {memo} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, Icon, Rating } from 'react-native-elements'
import { imagePath } from '../../components/supportComponents/axios'

const DestinationItem = (props) => {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={styles.cardHeader}>
                    <Card.Title style={styles.title}>{props.title}</Card.Title>
                    <Rating type='custom' readonly ratingCount={5} imageSize={14} startingValue={props.rating} style={styles.rating} ratingColor='#1A936F' />
                    <View style={styles.ratingView}><Text style={styles.ratingText}>{props.rating}</Text></View>
                </View>

                <Card.Divider />
                <Card.Image source={{ uri: `${imagePath}/images/${props.titleImage}` }} style={styles.image} />
                <Text style={styles.intro}>{`${props.introduction.substring(0, 300)}...[read more]`}</Text>
                <Button title='Read More' buttonStyle={styles.button}
                    onPress={() => props.navigation.navigate('DestinationDetails', {
                        destID: props.id,
                        title: props.title
                    })
                    } />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    card: {
        // padding: 0,
        borderRadius: 10,
    },
    cardHeader: {
        flexDirection: 'row'
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 18
    },
    rating: {
        marginLeft: 7,
        marginTop: 6,
    },
    ratingView: {
        flexDirection: 'column',
        flex: 1
    },
    ratingText: {
        color: '#114B5F',
        fontSize: 17,
        textAlign: 'right'
    },
    image: {
        borderRadius: 10,
        resizeMode: 'contain',
        height: 250
    },
    intro: {
        marginTop: '2%',
        fontSize: 15,
        marginBottom: '3%',
        textAlign: 'justify'
    },
    button: {
        backgroundColor: '#1A936F',
        borderRadius: 7
    }
})

export default memo(DestinationItem)
