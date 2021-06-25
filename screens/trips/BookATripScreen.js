import React, { useEffect } from 'react'
import { Text, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import TripCard from "../../components/tripComponents/TripCard"
import SearchBar from '../../components/supportComponents/SearchBar';
import { listTrips } from '../../store/actions/tripActions';


const BookATripScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listTrips())
    }, [dispatch])

    const tripList = useSelector(state => state.tripList)


    return (
        <SafeAreaView >
            <SearchBar />

            {tripList.loading ? (
                <>
                    <ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />
                    <Text style={{ textAlign: 'center', marginTop: 4 }}>Loading Trips</Text>
                </>) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.flatlist}
                    data={tripList.trips}
                    keyExtractor={item => item._id}
                    initialNumToRender={4}
                    renderItem={itemData => (
                        <TripCard
                            id={itemData.item._id}
                            title={itemData.item.title}
                            price={itemData.item.price}
                            rating={itemData.item.rating}
                            reviews={itemData.item.reviews}
                            startDate={itemData.item.start_date}
                            endDate={itemData.item.end_date}
                            titleImage={itemData.item.display_image}
                            navigation={navigation}
                        />
                    )}
                />
            )}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flatlist: {
        marginBottom: 50,
        paddingBottom: 50,
        marginTop: 5
    }
})

export default BookATripScreen
