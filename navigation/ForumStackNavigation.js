import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';


// Importing screens
import ForumScreen from "../screens/forum/ForumScreen"
import AskQuestionScreen from '../screens/forum/AskQuestionScreen'
import QuestionDetailsScreen from '../screens/forum/QuestionDetailsScreen'
import TopicQuestionsScreen from '../screens/forum/TopicQuestionsScreen'

// Importing components
import { Icon } from 'react-native-elements/dist/icons/Icon';


const Stack = createStackNavigator();

const ForumStackNavigation = ({ navigation }) => {
    const homeButton = () => <TouchableOpacity
    onPress={() => navigation.navigate("Home")}>
    <Icon name='home' color='white' size={26} style={{ marginRight: 10 }} />
</TouchableOpacity>

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#114B5F',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',

            }}
        >
            <Stack.Screen
                name="Forum"
                component={ForumScreen}
                options={{
                    title: 'Forum',
                    headerLeft: () => <TouchableOpacity
                        style={styles.menuIcon} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name='menu' color='white' size={28} />
                    </TouchableOpacity>
                }}
            />

            <Stack.Screen
                name="AskQuestion"
                component={AskQuestionScreen}
                options={{
                    title: 'Ask Question',
                    headerRight: homeButton,
                }}
            />

            <Stack.Screen
                name="QuestionDetails"
                component={QuestionDetailsScreen}
                options={{
                    title: 'Details',
                    headerRight: homeButton,
                }}
            />

            <Stack.Screen
                name="TopicQuestions"
                component={TopicQuestionsScreen}
                options={{
                    title: 'Questions',
                    headerRight: homeButton,
                }}
            />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    menuIcon: {
        fontSize: 30,
        marginLeft: 10
    }
})

export default ForumStackNavigation
