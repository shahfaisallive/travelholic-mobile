import React,{useEffect,useState} from 'react'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator, LogBox } from 'react-native'
import {imagePath} from '../../components/supportComponents/axios'
import axios from "../../components/supportComponents/axios"

const TopicQuestionsScreen = ({route,navigation}) => {

    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
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
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    }, [])
  
    return (
        <ScrollView>
             <Text style={styles.heading1}>{`${route.params.topic} Questions`}</Text>
                <View style={styles.allQuestionsConatiner}>
                    {loading ? (<ActivityIndicator size='large' color='#1A936F' style={{ marginTop: 50 }} />) : (
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
                                                <Image source={{ uri: `${imagePath}/users/${itemData.item.user.display_image_name}`}} style={styles.profileImage} />
                                            </View>
                                            <View style={styles.questionInfoView}>
                                                <Text style={styles.text2}>{itemData.item.user.name}</Text>
                                                <Text>{itemData.item.statement}</Text>
                                                <Text style={styles.dateText}>{`Posted: ${itemData.item.createdAt.substring(0,10)}`}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50
    },
    topicsView: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 10,
        marginBottom: 15,
        paddingHorizontal: 10
    },
    heading1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    topicImage: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 0.5
    },
    singleTopicView: {
        width: '31%',
        marginRight: 12
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
    askBtnCont: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
    },
    askBtn: {
        backgroundColor: '#114B5F',
        height: 45
    }
})

export default TopicQuestionsScreen
