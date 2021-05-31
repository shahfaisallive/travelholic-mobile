import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import { imagePath } from '../supportComponents/axios'

const AttractionsSection = ({ attractions }) => {

    const renderAttractions = attractions.map(attraction => (
        <Card containerStyle={styles.card} key={attraction._id}>
            <Card.Image source={{ uri: `${imagePath}/images/${attraction.path}` }} style={styles.image} />
            <Card.Title style={styles.title}>{attraction.title}</Card.Title>
        </Card>
    ))

    return (
        <View>
            <Text style={styles.heading}>Attractions</Text>
            {/* <FlatList
                style={{flexDirection: 'row'}}
                data={attractions}
                keyExtractor={item => item._id}
                renderItem={itemData => (
                    <Card containerStyle={styles.card}>
                        <Card.Image source={{ uri: `${imagePath}/images/${itemData.item.path}` }} style={styles.image} />
                        <Card.Divider />
                        <Card.Title style={styles.title}>{itemData.item.title}</Card.Title>
                    </Card>
                )}

            /> */}

            <ScrollView>
                {renderAttractions}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    card: {
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        textAlign: 'center'
    },
    image: {
        borderRadius: 10,
        resizeMode: 'contain',
        height: 250
    }
})


export default AttractionsSection
