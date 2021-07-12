import React,{useEffect,useState} from 'react'
import { Text, View ,StyleSheet,TextInput,ToastAndroid,LogBox} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import axios from "../../components/supportComponents/axios"
import { Button, Input } from 'react-native-elements'
import { useSelector } from 'react-redux'



const AskQuestionScreen = ({navigation}) => {

    const userInfo = useSelector(state => state.user.userInfo)

    const [submitLoader, setSubmitLoader] = useState(false)
    const [topicPickerOpen, settopicPickerOpen] = useState(false)

    const [topic, setTopicValue] = useState('')
    const [statement, setStatement] = useState('')
    const [description, setDescription] = useState('')

    const [topics, setTopics] = useState([
        {label:"Transport",value:"Transport"},
        {label:"Accomodations",value:"Accomodations"},
        {label:"Budget",value:"Budget"},
        {label:"Other",value:"Other"}
    ])

    useEffect(()=>{
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    },[])

    const addQuestion = () => {

        setSubmitLoader(true)
        if ( topic=='' || statement=='' || description=='' ){
            setSubmitLoader(false)
            ToastAndroid.show(
                'Please Complete the Form',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
        }
        else if (userInfo) {
          const user = userInfo._id
          axios.post('/questions/', { topic, statement, description, user })
            .then(res => {
                setSubmitLoader(false)
                ToastAndroid.show(
                    'Question Added',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM
                );
                navigation.navigate('QuestionDetails', {
                    questionID: res.data._id
                })
            })
            .catch(err => {
                setSubmitLoader(false)
            })
        }
        else {
            setSubmitLoader(false)
            ToastAndroid.show(
                'Please Log In to Submit Question',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
        }
    
      }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Topic</Text>
            <DropDownPicker
                open={topicPickerOpen}
                value={topic}
                items={topics}
                setOpen={settopicPickerOpen}
                setValue={setTopicValue}
                setItems={setTopics}
                containerStyle={styles.pickerStyle}
                zIndex={10001}
                searchable={false}
                placeholder='Select Your Topic'
            />
            <Text style={styles.label}>Question Statement</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={statement => setStatement(statement)}
                 multiline={true} numberOfLines={10}
            />
            <Text  style={styles.label}>Question Description</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={description => setDescription(description)}
                 multiline={true} numberOfLines={10}
            />
            <Button title='Submit Question' onPress={addQuestion}
                containerStyle={styles.btnCheckCont} buttonStyle={styles.btnCheck}
                loading={submitLoader}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center'
    },
    text1: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: 5
    },
    pickerStyle: {
        width: '90%',
        marginTop: 10
    },
    label: {
        fontSize: 18,
        color: '#114B5F',
        fontWeight: 'bold',
        marginTop: 10
    },
    btnCheckCont: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    btnCheck: {
        backgroundColor: '#1A936F'
    },
    input: {
        paddingTop:20,
        width: '95%',
        borderWidth: 0.5,
        borderColor: "transparent" 
    },
    inputStyle: {
        fontSize: 17,
        backgroundColor:"white",
        borderWidth:0
    },
    textInput: {
        height: 80,
        margin: 12,
        borderWidth: 0.5,
        borderColor: 'grey',
        width: 350,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        textAlignVertical: 'top',
        backgroundColor:"white"
    },
    btnCheckCont: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    btnCheck: {
        backgroundColor: '#1A936F'
    },
})

export default AskQuestionScreen
