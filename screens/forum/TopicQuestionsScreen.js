import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native'
import { imagePath } from '../../components/supportComponents/axios'
import axios from "../../components/supportComponents/axios"

const TopicQuestionsScreen = ({ route, navigation }) => {

    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        navigation.setOptions({ title: `${route.params.topic} Questions` })
        setLoading(true)
        axios.get(`/questions/topic/${route.params.topic}`)
            .then(res => {
                // console.log(res.data);
                setQuestions(res.data);
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err);
            });
    }, [])

    return (
        <View>
            <View style={styles.allQuestionsConatiner}>
                {loading ? (<ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 50 }} />) :
                    questions.length !== 0 ? (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={questions}
                            keyExtractor={item => item._id}
                            initialNumToRender={4}
                            renderItem={itemData => (
                                <TouchableOpacity onPress={() => navigation.navigate('QuestionDetails', {
                                    questionID: itemData.item._id
                                })}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={styles.singleQuestionView}>
                                            <View style={styles.profileImageView}>
                                                {itemData.item.user ?
                                                    <Image source={{ uri: `${imagePath}/users/${itemData.item.user.display_image_name}` }} style={styles.profileImage} /> :
                                                    <Image source={{ uri: `https://lh3.googleusercontent.com/proxy/78s_TWVthGsakb2bF4bt3kwjJdyaRK4GjWLLlOacD_1dotJqhgmhWukQzvZ3ScRzqRkIFnUrgIZNfX9cx83wHAtHoAZjl1rOVs4v81wv8Pavaj57RUOwkFXi` }} style={styles.profileImage} />}

                                            </View>
                                            <View style={styles.questionInfoView}>
                                                {itemData.item.user ? <Text style={styles.text2}>{itemData.item.user.name}</Text> :
                                                    <Text style={styles.text2}>User</Text>}

                                                <Text>{itemData.item.statement}</Text>
                                                <Text style={styles.dateText}>{`Posted: ${itemData.item.createdAt.substring(0, 10)}`}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    ) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text2: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    heading1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    allQuestionsConatiner: {
        paddingTop: 20,
        paddingHorizontal: 10
    },
    singleQuestionView: {
        flexDirection: 'row',
        // borderWidth: 0.4,
        // borderRadius: 7,
        // borderColor: '#114B5F',
        // borderStyle: 'solid',
        backgroundColor: '#D6DCDC',
        paddingVertical: 5,
        marginBottom: 10
    },
    profileImageView: {
        width: '17%',
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5
    },
    profileImage: {
        width: '90%',
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

export default TopicQuestionsScreen
