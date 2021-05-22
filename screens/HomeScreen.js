import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    )
}

export default HomeScreen
