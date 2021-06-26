import React, { useEffect, useState } from 'react'
import { TextInput, StyleSheet, Modal, Text, View, Alert } from 'react-native'
import { Button, Rating } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { createTripReview } from '../../store/actions/tripActions'
import { TRIP_CREATE_REVIEW_RESET } from '../../store/constants/tripConstants'

const ReviewSection = ({ trip }) => {
    const dispatch = useDispatch()

    const [userRating, setUserRating] = useState(0)
    const [comment, setComment] = useState('')

    const [modalVisible, setModalVisible] = useState(false);

    const tripCreateReview = useSelector(state => state.tripCreateReview)
    const { error, success } = tripCreateReview

    useEffect(() => {
        if (success) {
            Alert.alert(
                "Review Posted",
                "Your review has been posted successfully"
            );
            setUserRating(0)
            setComment('')
            dispatch({ type: TRIP_CREATE_REVIEW_RESET })
        }
    }, [dispatch, success])

    const userInfo = useSelector(state => state.user.userInfo)

    const submitReview = () => {
        dispatch(createTripReview(trip._id, { rating: userRating, comment }))
        setModalVisible(!modalVisible)
    }

    const handleWriteReview = () => {
        if (userInfo) {
            setModalVisible(true)
        } else {
            Alert.alert(
                "Not logged in",
                "Please log in to review this trip"
            );
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Reviews</Text>

            {trip.reviews.length === 0 && <View style={styles.showReviews}>
                <Text style={{ fontSize: 16 }}>No Reviews</Text>
            </View>}

            {trip.reviews.map(review => (
                <View style={styles.showReviews} key={review._id}>
                    <View style={styles.reviewerNameView}>
                        <Text style={styles.reviewerName}>{review.name}</Text>
                        <Rating type='custom' readonly ratingCount={5} imageSize={14} startingValue={review.rating} ratingColor='#114B5F' style={styles.ratingStars} />
                    </View>
                    <View style={styles.reviewTextView}>
                        <Text>{review.comment}</Text>
                    </View>
                    <View style={styles.timeStampView}>
                        <Text style={styles.timeStampText}>Time Posted: {review.createdAt.substring(0, 10)}</Text>
                    </View>

                </View>
            ))}


            {/* REVIEW MODAL */}
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
                            <TextInput
                                style={styles.input}
                                onChangeText={comment => setComment(comment)}
                                placeholder='Write Review' multiline={true} numberOfLines={5}
                            />
                            <Rating type='custom' ratingCount={5} fractions={2}
                                imageSize={35} startingValue={userRating} ratingColor='#1A936F'
                                onFinishRating={(userRating) => setUserRating(userRating)}
                            />
                            <Button title='Submit Rating'
                                buttonStyle={styles.submitRatingBtn}
                                onPress={submitReview} />

                        </View>
                    </View>
                </Modal>
                <View style={styles.reviewBtnView}>
                    <Button title={`Write a Review`} buttonStyle={styles.reviewBtn}
                        onPress={handleWriteReview} />
                </View>
            </View>
        </View>
    )
}

// Stylesheet
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderTopColor: 'grey',
        borderTopWidth: 2,
        borderStyle: 'solid',
        paddingBottom: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    },
    showReviews: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 8,
        marginTop: 5
    },
    reviewerNameView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start'
    },
    reviewerName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5
    },
    ratingStars: {
        alignSelf: 'center'
    },
    reviewTextView: {
        marginTop: 5
    },
    timeStampView: {
        marginTop: 8,
        alignItems: 'flex-end'
    },
    timeStampText: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'grey'
    },

    // MODAL STYLE
    reviewBtnView: {
        marginTop: 7
    },
    reviewBtn: {
        backgroundColor: '#1A936F',
        fontSize: 14,
        borderRadius: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
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
    },
    input: {
        height: 80,
        margin: 12,
        borderWidth: 0.5,
        borderColor: 'grey',
        width: 240,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        textAlignVertical: 'top'
    },
})

export default ReviewSection
