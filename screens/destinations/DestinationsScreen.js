import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import axios from "../../components/supportComponents/axios"

import DestinationItem from "../../components/destinationComponents/DestinationItem"
import SearchBar from '../../components/supportComponents/SearchBar';

const DestinationsScreen = ({ navigation }) => {
    const [destinations, setDestinations] = useState([]);

    axios.get("/destinations").then(res => { setDestinations(res.data) })
    
    return (
        <SafeAreaView >
            <SearchBar />
            <FlatList
                style={styles.flatlist}
                data={destinations}
                keyExtractor={item => item._id}
                renderItem={itemData => (
                    <DestinationItem
                        title={itemData.item.title}
                        rating={itemData.item.rating}
                        introduction={itemData.item.introduction}
                        titleImage={itemData.item.title_image}
                    />
                )}
            />
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
