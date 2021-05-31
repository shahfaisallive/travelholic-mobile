import React, { useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet, Text, ScrollView, LogBox } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getDestinationDetails } from '../../store/actions/destinationActions'


// Import Destination Details components 
import IntroSection from "../../components/destinationComponents/IntroSection"
import PhotosSection from "../../components/destinationComponents/PhotosSection"
import AttractionsSection from "../../components/destinationComponents/AttractionsSection"
import HistorySection from "../../components/destinationComponents/HistorySection"
import GuidelinesSection from "../../components/destinationComponents/GuidelinesSection"

const DestinationDetailsScreen = ({ route, navigation }) => {
    const destID = route.params.destID

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDestinationDetails(destID))
        navigation.setOptions({ title: route.params.title })

        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [dispatch])

    const destDetails = useSelector(state => state.destinationDetails)
    const { loading, destinationDetails, error } = destDetails

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />) : (
                <ScrollView style={{flex: 1}}>
                    <IntroSection introduction={destinationDetails.introduction} titleImage={destinationDetails.title_image} rating={destinationDetails.rating} title={destinationDetails.title} />
                    <HistorySection history={destinationDetails.history} />
                    <GuidelinesSection guidelines={destinationDetails.guidelines} />
                    <AttractionsSection attractions={destinationDetails.attraction_photos} />
                    <PhotosSection photos={destinationDetails.photos} />
                </ScrollView>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10
    },

})

export default DestinationDetailsScreen
