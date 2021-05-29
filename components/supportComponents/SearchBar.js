import React from 'react'
import { StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
    return (
        <Searchbar placeholder='Search here...' style={styles.searchbar} inputStyle={{ fontSize: 15 }} />
    )
}

const styles = StyleSheet.create({
    searchbar: {
        width: '92%',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 20,
        height: 40
    },
})

export default SearchBar
