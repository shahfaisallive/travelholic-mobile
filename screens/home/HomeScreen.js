import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('PlanATrip')} >
                <Text>Planner</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BookATrip')} >
                <Text>Book</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
