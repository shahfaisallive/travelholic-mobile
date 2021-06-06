import React, { useEffect, useState } from 'react'
import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import NumericInput from 'react-native-numeric-input'
import { useDispatch, useSelector } from 'react-redux'
import { saveBookingInfo } from '../../store/actions/tripActions'


const BookingFormScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [seats, setSeats] = useState(1)
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState()
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')


    const trip = useSelector(state => state.tripDetails.trip)

    const title = trip.title
    const price = trip.price
    const total_price = seats * price


    const submitBookingInfo = () => {
        if (!name || !seats || !email || !phoneNo || !address || !city) {
            Alert.alert(
                "Missing Fields",
                "There are some missing fields which needs to be filled before proceeding."
            );
        } else {
            dispatch(saveBookingInfo({ title, name, email,price, seats, phoneNo, address, city, total_price }))
            navigation.navigate('BookingConfirmation')
        }
    }

    console.log()

    return (
        <View>
            <View>
                <ImageBackground source={require('../../assets/images/tripformbg.jpg')} style={styles.bgImage} imageStyle={styles.bg} >
                    <View style={styles.container}>
                        <Text style={styles.topText}>Fill in the booking form to proceed</Text>
                        <Input
                            onChangeText={name => setName(name)} placeholder={'Name'}
                            leftIcon={<Icon name="person" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={email => setEmail(email)} placeholder={'Email Address'}
                            leftIcon={<Icon name="email" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={phone => setPhoneNo(phone)} placeholder={'Phone number'}
                            leftIcon={<Icon name="phone" size={20} color='grey' />} containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={address => setAddress(address)} placeholder={'Address'}
                            leftIcon={<Icon name="home" size={20} color='grey' />}
                            containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <Input
                            onChangeText={city => setCity(city)} placeholder={'City'}
                            leftIcon={<Icon name="location-city" size={20} color='grey' />}
                            containerStyle={styles.input}
                            inputStyle={styles.inputStyle}
                        />

                        <View style={styles.counterView}>
                            <NumericInput onChange={seats => setSeats(seats)}
                                minValue={1} maxValue={10} rounded containerStyle={styles.seatCounter}
                                iconStyle={{ color: 'white' }} totalWidth={100} value={seats}
                                rightButtonBackgroundColor='#1A936F'
                                leftButtonBackgroundColor='#1A936F' />
                            <Text style={{ marginLeft: 10, fontSize: 14 }}>(Select number of seats)</Text>
                        </View>

                        <Button title={'Next'} onPress={submitBookingInfo}
                            containerStyle={styles.nextBtnCont} buttonStyle={styles.nextBtn}
                            loading={false} />

                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    bg: {
        resizeMode: 'cover',
        opacity: 0.2
    },
    topText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '80%'
    },
    inputStyle: {
        fontSize: 16,
    },
    counterView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginLeft: 50
    },
    seatCounter: {
        alignSelf: 'flex-start'
    },
    nextBtnCont: {
        width: '76%',
        marginTop: 20
    },
    nextBtn: {
        backgroundColor: '#114B5F'
    }
})

export default BookingFormScreen
