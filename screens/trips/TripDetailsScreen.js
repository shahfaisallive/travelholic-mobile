import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet, Text, ScrollView, LogBox } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
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
        LogBox.ignoreLogs(['Can\'t perform a React state update on an unmounted component']);
        LogBox.ignoreLogs(['Please provide the source.html or source.uri prop']);
        LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop']);
    }, [dispatch])

    const tripDetails = useSelector(state => state.tripDetails)
    const { loading, trip, error } = tripDetails

    return (loading ? (<ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />) : (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <TripIntro trip={trip} navigation={navigation} loading={loading} />
                <Itinerary trip={trip} />
                <TabDetails trip={trip} />
                <ReviewSection trip={trip} />
            </ScrollView>
        </View>
    )

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
