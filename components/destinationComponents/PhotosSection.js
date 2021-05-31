import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { imagePath } from '../supportComponents/axios'
import GridImageView from 'react-native-grid-image-viewer';
import { Image } from 'react-native-elements';



const PhotosSection = (props) => {

    const photos = props.photos

    const destPhotos = photos.map(photo => {
        const myKey = Object.values(photo)[1]
        return { image: `${imagePath}/images/${myKey}` }
    })

    return (
        <View>
            <Text style={styles.heading}>Photos</Text>

            <GridImageView data={destPhotos} />

        </View>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default PhotosSection
