import React, { useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card, Divider } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { SliderBox } from "react-native-image-slider-box";

// Component and screens
import SearchBar from '../../components/supportComponents/SearchBar';

const HomeScreen = ({ navigation }) => {
    const [images, setImages] = useState([
        require('../../assets/images/slider3.jpg'),
        require('../../assets/images/slider2.jpg'),
        require('../../assets/images/slider1.jpg')
    ])
    return (
        <ScrollView style={{ flex: 1 }}>

            {/* IMAGE SLIDER */}
            <View style={styles.slider}>
                <SliderBox images={images}
                    autoplay circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'contain'}
                    ImageComponentStyle={{ borderRadius: 15, width: '96%', marginTop: 5 }}
                    sliderBoxHeight={130}
                />
            </View>

            <SearchBar />

            {/*DESTINATIONS SECTION*/}
            <View style={styles.headingView}>
                <Icon name='landscape' iconStyle={styles.headingIcon} />
                <Text style={styles.heading1}>Destinations</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Card containerStyle={styles.cardContainer}>
                    <Card.Image source={require("../../assets/images/demo1.jpg")} style={styles.destinationImage} />
                    <Card.Divider />
                    <Card.Title>Hunza</Card.Title>
                </Card>
                <Card containerStyle={styles.cardContainer}>
                    <Card.Image source={require("../../assets/images/demo2.jpg")} style={styles.destinationImage} />
                    <Card.Divider />
                    <Card.Title>Swat</Card.Title>
                </Card>
                <Card containerStyle={styles.cardContainer}>
                    <Card.Image source={require("../../assets/images/demo2.jpg")} style={styles.destinationImage} />
                    <Card.Divider />
                    <Card.Title>Lahore</Card.Title>
                </Card>
            </ScrollView>

            <View>
                <TouchableOpacity style={styles.linkBox1}
                    onPress={() => navigation.navigate('Destinations')}>
                    <Text style={styles.linkText1} >View all Destinations</Text>
                </TouchableOpacity>
            </View>

            {/* PLAN YOUR JOURNEYS SECTIONS */}
            <View style={styles.headingView}>
                    <Icon name='event' iconStyle={styles.headingIcon} />
                    <Text style={styles.heading1}>Plan your Journeys</Text>
                </View>
            <View>
                <Card containerStyle={styles.cardContainer1}>
                    <Card.Image source={require("../../assets/images/plannerimage.jpg")} style={styles.planner} />
                    <Card.Divider />
                    <TouchableOpacity onPress={() => navigation.navigate('PlanATrip')}>
                        <Card.Title style={{ color: 'white' }}>Plan your journeys here</Card.Title>
                    </TouchableOpacity>
                </Card>
            </View>

            {/* BOOK TRIPS SECTION */}
            <View style={{}}>
                <View style={styles.headingView}>
                    <Icon name='directions-bus' iconStyle={styles.headingIcon} />
                    <Text style={styles.heading1}>Book a trip</Text>
                </View>

                <View style={styles.tripSection}>
                    <TouchableOpacity onPress={() => navigation.navigate('BookATrip')} >
                        <Icon name='directions-bus' size={100} color="#114B5F" />
                        <Text style={{ textAlign: 'center' }}>Tap here to view all trips</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    slider: {
        borderRadius: 10,
    },
    heading1: {
        fontSize: 21,
        textAlign: 'center'
    },
    headingIcon: {
        fontSize: 30,
        marginRight: 5
    },
    headingView: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#114B5F',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    destinationImage: {
        height: 210,
        width: 280,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardContainer: {
        padding: 0,
        borderRadius: 10,
        shadowRadius: 10,
        shadowColor: 'green',

    },
    linkBox1: {
        backgroundColor: '#1A936F',
        paddingTop: 8,
        paddingBottom: 8,
        width: '93%',
        alignSelf: 'center',
        borderRadius: 6,
        marginTop: 10
    },
    linkText1: {
        color: 'white',
        textAlign: 'center'
    },
    planner: {
        resizeMode: 'contain',
        height: 241,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardContainer1: {
        backgroundColor: '#1A936F',
        padding: 0,
        borderRadius: 10,
        shadowRadius: 10,
        shadowColor: 'green'
    },
    tripSection: {
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#1A936F',
        width: '93%',
        alignSelf: 'center',
        padding: 30, marginBottom: 20,
        borderRadius: 10
    }

})

export default HomeScreen
