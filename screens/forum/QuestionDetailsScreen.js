import React, { useEffect, useState } from 'react'
import axios, { imagePath } from "../../components/supportComponents/axios"
import { Text, View, StyleSheet, Image, ActivityIndicator, FlatList, TextInput } from 'react-native'
import { Divider, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import AnswerCard from '../../components/forumComponents/AnswerCard';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const QuestionDetailsScreen = ({ route }) => {

    const questionID = route.params.questionID
    const [question, setQuestion] = useState({})
    const [answers, setAnswers] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitLoader, setSubmitLoader] = useState(false)
    const [answerText, setAnswerText] = useState('')

    const userInfo = useSelector(state => state.user.userInfo)

    useEffect(() => {
        setLoading(true)
        axios.get(`/questions/question/${questionID}`)
            .then(res => {
                // console.log(res.data);
                setQuestion(res.data);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            });

        if (question) {
            setLoading(true)
            axios.get(`answers/questions/${questionID}`)
                .then(res => {
                    // console.log('answers', res.data)
                    setAnswers(res.data);
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false)
                });
        }
    }, [])

    const getAnswers = () => {
        setLoading(true)
        axios.get(`answers/questions/${questionID}`)
            .then(res => {
                // console.log('answers', res.data)
                setAnswers(res.data);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            });
    }

    const submitAnswerHandler = () => {
        if (answerText !== '') {
            if (userInfo) {
                setSubmitLoader(true)
                axios.post(`/answers/`, { user: userInfo._id, question: questionID, text: answerText })
                    .then(res => {
                        setAnswerText('')
                        Alert.alert(
                            "Success",
                            "Answer posted successfuly!"
                        )
                        setSubmitLoader(false)
                    })
            } else {
                Alert.alert(
                    "Not logged in",
                    "Please log in to submit an answer"
                );
                setSubmitLoader(false)
            }
        } else {
            Alert.alert(
                "Empty Fields",
                "Please fill in the required field before submitting"
            );
        }

        wait(2000).then(getAnswers)
    }

    return (loading ? (<ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 260 }} />) : (
        <View style={styles.container}>
            {/* Answers Below */}
            <FlatList
                ListHeaderComponent={
                    <>
                        {/* Question View */}
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.singleQuestionView}>
                                {question.user ? (
                                    <View style={styles.profileImageView}>
                                        <Image source={{ uri: `${imagePath}/users/${question.user.display_image_name}` }} style={styles.profileImage} />
                                    </View>
                                ) : <View style={styles.profileImageView}>
                                    <Image source={{ uri: `https://lh3.googleusercontent.com/proxy/78s_TWVthGsakb2bF4bt3kwjJdyaRK4GjWLLlOacD_1dotJqhgmhWukQzvZ3ScRzqRkIFnUrgIZNfX9cx83wHAtHoAZjl1rOVs4v81wv8Pavaj57RUOwkFXi` }} style={styles.profileImage} />
                                </View>
                                }

                                <View style={styles.questionInfoView}>
                                    {question.user ? (
                                        <Text style={styles.text2}>{question.user.name}</Text>
                                    ) : <Text style={styles.text2}>User</Text>}
                                    <Text style={styles.text1}>{question.statement}</Text>
                                    <Text>{question.description}</Text>
                                    {question.createdAt ? (
                                        <Text style={styles.dateText}>{`Posted: ${question.createdAt.substring(0, 10)}`}</Text>
                                    ) : null}
                                </View>
                            </View>
                        </View>
                        <Divider />
                    </>
                }
                showsVerticalScrollIndicator={false}
                data={answers}
                keyExtractor={item => item._id}
                initialNumToRender={4}
                renderItem={itemData => (
                    <>
                        {itemData.item.user ? (
                            <AnswerCard itemData={itemData} id={itemData.item._id}
                                answerUserID={itemData.item.user._id} loggedInUser={userInfo._id} />
                        ) : (
                            <AnswerCard itemData={itemData} id={itemData.item._id}
                                answerUserID={'noUserId123'} loggedInUser={userInfo._id} />
                        )}
                    </>
                )}
                ListFooterComponent={
                    <>
                        <Divider />
                        {/* Answer Question Form */}
                        <Text style={styles.heading}>Answer this Question</Text>
                        <View style={styles.answerFormView}>
                            <TextInput
                                style={styles.textInput} value={answerText}
                                onChangeText={answerText => setAnswerText(answerText)}
                                multiline={true} numberOfLines={6} placeholder='Type your answer...'
                            />

                            {!submitLoader ? (
                                <Button title={'SUBMIT ANSWER'} onPress={submitAnswerHandler}
                                    containerStyle={styles.btnCont} buttonStyle={styles.btn}
                                />
                            ) : (
                                <ActivityIndicator style={styles.btnCont} size="large" color="#1A936F" />
                            )}
                        </View>
                    </>
                }
            />
        </View>
    ))
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    singleQuestionView: {
        flexDirection: 'row',
        borderRadius: 7,
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
    heading: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#114B5F',
        marginTop: 7
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
    answerFormView: {
        marginTop: 8,
    },
    textInput: {
        height: 80,
        // margin: 12,
        borderWidth: 0.5,
        borderColor: 'grey',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        textAlignVertical: 'top',
        backgroundColor: "white"
    },
    btnCont: {
        width: '50%',
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 50
    },
    btn: {
        backgroundColor: '#114B5F',
        height: 45
    }
})

export default QuestionDetailsScreen
