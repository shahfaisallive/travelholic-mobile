import React, { useEffect, useState } from 'react'
import axios, { imagePath } from "../../components/supportComponents/axios"
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';


const QuestionDetailsScreen = ({ route }) => {
    const questionID = route.params.questionID
    const [question, setQuestion] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`/questions/question/${questionID}`)
            .then(res => {
                console.log(res.data);
                setQuestion(res.data);
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err);
            });
    }, [])

    return (loading ? (<ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />) : (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.singleQuestionView}>
                    {question.user ? (
                        <View style={styles.profileImageView}>
                            <Image source={{ uri: `${imagePath}/users/${question.user.display_image_name}` }} style={styles.profileImage} />
                        </View>
                    ) : null}

                    <View style={styles.questionInfoView}>
                        {question.user ? (
                            <Text style={styles.text2}>{question.user.name}</Text>
                        ) : null}
                        <Text style={styles.text1}>{question.statement}</Text>
                        <Text>{question.description}</Text>
                        {question.createdAt ? (
                            <Text style={styles.dateText}>{`Posted: ${question.createdAt.substring(0, 10)}`}</Text>
                        ) : null}
                    </View>
                </View>
            </View>
        </View>
    ))
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        paddingHorizontal: 10,
        paddingTop: 20
    },
    singleQuestionView: {
        flexDirection: 'row',
        // borderWidth: 0.4,
        borderRadius: 7,
        // borderColor: '#114B5F',
        // borderStyle: 'solid',
        backgroundColor: '#D6DCDC',
        paddingVertical: 5,
        marginBottom: 10
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
    profileImageView: {
        width: '17%',
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5
    },
    profileImage: {
        width: '85%',
        height: 50,
        resizeMode: 'contain',
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 0.5
    },
    questionInfoView: {
        width: '80%'
    },
    dateText: {
        fontSize: 12,
        color: 'grey',
        marginTop: 5
    },

})

export default QuestionDetailsScreen
