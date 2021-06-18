import React, { useEffect } from 'react'
import {Text, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import DestinationItem from "../../components/destinationComponents/DestinationItem"
import SearchBar from '../../components/supportComponents/SearchBar';
import { getDestinations } from '../../store/actions/destinationActions';

const DestinationsScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDestinations())
    }, [dispatch])

    const destinationsList = useSelector(state => state.destinationsList)
    const { loading, destinations, error } = destinationsList


    return (
        <SafeAreaView >
            <SearchBar />

            {loading ? (
                <>
                    <ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />
                    <Text style={{textAlign: 'center', marginTop: 4}}>Loading Destinations</Text>
                </>) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.flatlist}
                    data={destinations}
                    keyExtractor={item => item._id}
                    initialNumToRender={4}
                    renderItem={itemData => (
                        <DestinationItem
                            id={itemData.item._id}
                            title={itemData.item.title}
                            rating={itemData.item.rating}
                            introduction={itemData.item.introduction}
                            titleImage={itemData.item.title_image}
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


export default DestinationsScreen
