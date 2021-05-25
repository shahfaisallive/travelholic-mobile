import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const DestinationsScreen = ({navigation}) => {
    return (
        <View>
            <Text>Destinations</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DestinationDetails')}>
                <Text>Detials</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DestinationsScreen
