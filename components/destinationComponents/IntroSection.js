import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { Button, Image, Rating } from 'react-native-elements'
import { imagePath } from '../supportComponents/axios'

const IntroSection = (props) => {
    const [userRating, setUserRating] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);

    const submitRating = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View>
            <View style={styles.ratingHeader}>
                <Rating type='custom' readonly ratingCount={5} imageSize={18} startingValue={props.rating} style={styles.rating} ratingColor='#1A936F' />
                <Text style={styles.ratingText}>({props.rating})</Text>
            </View>

            <Image
                source={{ uri: `${imagePath}/images/${props.titleImage}` }}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}
            />

            {/* RATING MODAL */}
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Rating type='custom' ratingCount={5} fractions={1}
                                imageSize={45} startingValue={userRating} ratingColor='#1A936F'
                                onFinishRating={(rating) => setUserRating(rating)}
                            />
                            <Button title='Submit'
                                buttonStyle={styles.submitRatingBtn}
                                onPress={submitRating} />

                        </View>
                    </View>
                </Modal>
                <View style={styles.ratingBtnView}>
                    <Button title={`How much do you rate ${props.title}?`}
                        buttonStyle={styles.rateBtn}
                        onPress={() => setModalVisible(true)} />
                </View>
            </View>

            <Text style={styles.heading}>Introduction</Text>
            <View >
                <Text style={styles.intro}>{props.introduction}</Text>
            </View>

        </View>
    )
}


// Stylesheet
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    intro: {
        fontSize: 16
    },
    image: {
        width: '100%',
        height: 260,
        resizeMode: 'cover',
        borderRadius: 10
    },
    ratingHeader: {
        flexDirection: 'row',
        marginBottom: 5
    },
    rating: {
        marginLeft: 7,
        marginTop: 6,
    },
    ratingView: {
        flexDirection: 'column',
    },
    ratingText: {
        color: '#114B5F',
        fontSize: 17,
        marginTop: 3,
        marginLeft: 5
    },
    rateBtn: {
        backgroundColor: '#1A936F',
        fontSize: 17,
        borderRadius: 10
    },
    ratingBtnView: {
        marginTop: 7
    },

    //Rating Modal styles
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    submitRatingBtn: {
        borderRadius: 10,
        backgroundColor: '#114B5F',
        marginTop: 20
    }
})

export default IntroSection
