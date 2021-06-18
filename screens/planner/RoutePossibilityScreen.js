import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'react-native-elements';


const RoutePossibility = ({ navigation }) => {
    const [fromPickerOpen, setFromPickerOpen] = useState(false)
    const [fromValue, setFromValue] = useState(null)
    const [fromDestinations, setFromDestinations] = useState([
        { label: 'Dir', value: 'Dir' },
        { label: 'Chitral', value: 'Chitral' }
    ])

    const [toPickerOpen, setToPickerOpen] = useState(false)
    const [toValue, setToValue] = useState(null)
    const [toDestinations, setToDestinations] = useState([
        { label: 'Dir', value: 'Dir' },
        { label: 'Chitral', value: 'Chitral' }])

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Choose any two points to check route possibility</Text>

            <View>
                <Text style={styles.label}>From</Text>
                <DropDownPicker
                    open={fromPickerOpen}
                    value={fromValue}
                    items={fromDestinations}
                    setOpen={setFromPickerOpen}
                    setValue={setFromValue}
                    setItems={setFromDestinations}
                    containerStyle={styles.pickerStyle}
                    zIndex={10001}
                    searchable={true}
                    placeholder='Select First Destination'
                />

                <Text style={styles.label}>To</Text>
                <DropDownPicker
                    open={toPickerOpen}
                    value={toValue}
                    items={toDestinations}
                    setOpen={setToPickerOpen}
                    setValue={setToValue}
                    setItems={setToDestinations}
                    containerStyle={styles.pickerStyle}
                    searchable={true}
                    placeholder='Select Second Destination'

                />
            </View>

            <Button title='Check Route' onPress={() => { console.log('btn pressed') }}
                containerStyle={styles.btnCheckCont} buttonStyle={styles.btnCheck}
            />

            <View style={styles.outputView}>
                <Text style={styles.outputText}>nahh jee naa, ye rasta band hy</Text>
            </View>

            <View style={{ marginTop: 70 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' />
                    <Text style={{ alignSelf: 'center' }}>Back to Trip Planner</Text>
                </TouchableOpacity>
            </View>
        </View >
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
        alignSelf: 'center',
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
    outputView: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        width: '90%',
        marginTop: 15,
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: 'grey',
        alignItems: 'center'
    },
    outputText: {
        fontSize: 16,
        fontWeight: '700'
    }
})

export default RoutePossibility
