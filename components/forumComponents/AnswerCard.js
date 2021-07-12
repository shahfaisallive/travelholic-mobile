import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, Alert } from 'react-native'
import axios, { imagePath } from "../../components/supportComponents/axios"

const AnswerCard = ({ itemData, id, loggedInUser, answerUserID }) => {
    const deleteAnswerHandler = () => {
        if (loggedInUser === answerUserID) {
            Alert.alert(
                "Delete",
                `Do you want to delete this answer?`,
                [
                    {
                        text: "No",
                        onPress: () => { console.log('no') },
                    },
                    {
                        text: "Delete Answer",
                        onPress: () => {
                            axios.delete(`/answers/${id}`)
                                .then(res => {
                                    console.log('Answer Deleted')
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        },
                    },
                ],
            );
        }
    }

    return (
        <TouchableOpacity onLongPress={deleteAnswerHandler}>
            <View style={styles.answerView}>
                <View style={styles.answerProfileImageView}>
                    <Image source={{ uri: `${imagePath}/users/${itemData.item.user.display_image_name}` }} style={styles.answerProfileImage} />
                </View>

                <View style={styles.answerInfoView}>
                    <Text style={styles.text2}>{itemData.item.user.name}</Text>
                    <Text>{itemData.item.text}</Text>
                    <Text style={styles.dateText}>{`Posted: ${itemData.item.createdAt.substring(0, 10)}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    answerView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 5,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 7
    },
    answerProfileImageView: {
        width: '17%',
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5
    },
    answerProfileImage: {
        width: '85%',
        height: 48,
        resizeMode: 'contain',
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 0.5
    },
    answerInfoView: {
        width: '80%'
    },
    dateText: {
        fontSize: 12,
        color: 'grey',
        marginTop: 5
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 16,
    },
})

export default AnswerCard
