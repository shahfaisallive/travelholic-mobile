import React from 'react'
import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Card, Icon } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon';
import { Avatar, Divider } from 'react-native-paper';

const About = () => {
    return (
        <ImageBackground source={require('../../assets/images/logo.png')} style={styles.bgImage} imageStyle={styles.bg} >
            <View style={styles.container}>
                <View style={styles.introView}>
                    <Text style={styles.heading}>Travelogic</Text>
                    <Text style={styles.text}>
                        Travelogic Pakistan is one of the leading travelguide system and tour operating company in Pakistan. We aim to provide best guidance for travel enthusiastics across Pakistan.
                    </Text>

                    <Text style={styles.heading1}>Join us here</Text>
                    <View style={{ flexDirection: 'row', marginTop: 12 }}>
                        <SocialIcon
                            type="facebook" iconStyle={styles.socialIcon}
                            onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                        />

                        <SocialIcon
                            type="twitter" iconStyle={styles.socialIcon}
                            onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                        />

                        <SocialIcon
                            type="instagram" iconStyle={styles.socialIcon}
                            onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Icon name='place' />
                        <Text style={{ fontSize: 16 }}>Lahore, Pakistan</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Icon name='phone' />
                        <Text style={{ fontSize: 16, marginLeft: 5 }}>03124224469</Text>
                    </View>
                </View>
                <Divider />

                {/* Meet Our Team */}
                <View style={styles.meetOurTeam}>
                    <Text style={styles.heading}>Meet our Team</Text>

                    <View style={styles.memberView}>

                        <View style={styles.singleMemberView}>
                            <Avatar.Image size={100} source={require('../../assets/images/team-asad.jpg')} />
                            <Text style={styles.memberName}>Asad Gohar</Text>
                            <Text style={styles.memberSubText}>Founder</Text>

                            <View style={{ flexDirection: 'row',  paddingHorizontal: 2 }}>
                                <SocialIcon
                                    type="facebook" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                                <SocialIcon
                                    type="twitter" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                                <SocialIcon
                                    type="instagram" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                            </View>
                            
                        </View>

                        <View style={styles.singleMemberView}>
                            <Avatar.Image size={100} source={require('../../assets/images/team-faisal.jpeg')} />
                            <Text style={styles.memberName}>Shah Faisal</Text>
                            <Text style={styles.memberSubText}>Founder</Text>

                            <View style={{ flexDirection: 'row',  paddingHorizontal: 2 }}>
                                <SocialIcon
                                    type="facebook" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                                <SocialIcon
                                    type="twitter" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                                <SocialIcon
                                    type="instagram" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                            </View>
                            
                        </View>

                        <View style={styles.singleMemberView}>
                            <Avatar.Image size={100} source={require('../../assets/images/team-safa.jpg')} />
                            <Text style={styles.memberName}>Safa Naeem</Text>
                            <Text style={styles.memberSubText}>Founder</Text>

                            <View style={{ flexDirection: 'row',  paddingHorizontal: 2 }}>
                                <SocialIcon
                                    type="facebook" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                                <SocialIcon
                                    type="twitter" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                                <SocialIcon
                                    type="instagram" iconStyle={styles.memberSocial} style={{width: 25, height: 25}}
                                    onPress={() => { Alert.alert('Hello', 'hellooooooo') }}
                                />
                            </View>
                            
                        </View>

                        


                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#114B5F'
    },
    introView: {
        alignItems: 'center',
        marginBottom: 20
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    bg: {
        resizeMode: 'cover',
        opacity: 0.1
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },
    heading1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#114B5F',
        marginTop: 15
    },
    socialIcon: {
        fontSize: 30
    },

    // Meet our team
    meetOurTeam: {
        alignItems: 'center',
        marginTop: 20
    },
    memberView: {
        flexDirection: 'row',
        marginTop: 20
    },
    singleMemberView: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    memberName: {
        fontSize: 16,
        marginTop: 6,
        fontWeight: 'bold'
    },
    memberSubText: {
        fontSize: 14,
        color: 'grey'
    },
    memberSocial: {
        fontSize: 15
    }
})

export default About
