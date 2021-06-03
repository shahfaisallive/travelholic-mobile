import React, { useState } from 'react'
import { View, useWindowDimensions, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import HTML from "react-native-render-html";


const TabDetails = ({ trip }) => {

    //   Trip Detail Content Render
    const attractionsView = () => (
        <View style={styles.tabContent}>
            <HTML source={{ html: trip.attractions }} baseFontStyle={styles.contentText} />
        </View>
    );

    const servicesView = () => (
        <View style={styles.tabContent}>
            <HTML source={{ html: trip.service_provided }} baseFontStyle={styles.contentText} />
        </View>
    );

    const excludesView = () => (
        <View style={styles.tabContent}>
            <HTML source={{ html: trip.excludes }} baseFontStyle={styles.contentText} />
        </View>
    );


    // Tab Bar Functions
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'attractions', title: 'Attractions' },
        { key: 'services', title: 'Services' },
        { key: 'excludes', title: 'Excludes' }
    ]);

    // Custom Tab Bar
    const customTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex) =>
                            inputIndex === i ? 1 : 0.3
                        ),
                    });

                    return (
                        <TouchableOpacity
                            style={styles.tabItem}
                            onPress={() => setIndex(i)}>
                            <Animated.Text style={{ opacity, color: 'white' }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };


    const renderScene = SceneMap({
        attractions: attractionsView,
        services: servicesView,
        excludes: excludesView,
    });


    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={customTabBar}
            initialLayout={{ width: layout.width }}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 300,
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#DBDFDA',
        borderStyle: 'solid',
        borderWidth: 2
    },
    tabContent: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    contentText: {
        fontSize: 16,
        flex: 1,
        flexDirection: 'column'
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#114B5F',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: 'grey'
    },

})

export default TabDetails
