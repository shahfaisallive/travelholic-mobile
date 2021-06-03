import React, { useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet, Text, ScrollView, LogBox } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Divider } from 'react-native-elements'
import { listTripDetails } from '../../store/actions/tripActions'

// Importing screen components
import TripIntro from "../../components/tripComponents/TripIntro"
import Itinerary from '../../components/tripComponents/Itinerary'
import TabDetails from '../../components/tripComponents/TabDetails'
import ReviewSection from '../../components/tripComponents/ReviewSection'


const TripDetailsScreen = ({ route, navigation }) => {
    const tripID = route.params.tripID

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listTripDetails(tripID))
        navigation.setOptions({ title: route.params.title })

        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [dispatch])

    const tripDetails = useSelector(state => state.tripDetails)
    const { loading, trip, error } = tripDetails

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />) : (
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <TripIntro trip={trip} navigation={navigation} />
                    <Itinerary trip={trip} />
                    <TabDetails trip={trip} />
                    <ReviewSection trip={trip} />
                </ScrollView>
            )}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
    },

})


export default TripDetailsScreen
