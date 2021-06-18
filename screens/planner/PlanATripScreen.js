import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, LogBox } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import DropDownPicker from 'react-native-dropdown-picker';


// Planner components
import SearchBar from '../../components/supportComponents/SearchBar';

const PlanATripScreen = ({ navigation }) => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])


    const [departLocation, setDepartLocation] = useState('')
    const [finalLocation, setFinalLocation] = useState('')
    const [numPerson, setNumPerson] = useState(1)
    const [numDays, setNumDays] = useState(1)
    const [stayPickerOpen, setStayPickerOpen] = useState(false)
    const [stayValue, setStayValue] = useState(null)
    const [stayDestinations, setStayDestinations] = useState([
        { label: 'Dir', value: 'Dir' },
        { label: 'Chitral', value: 'Chitral' }
    ])


    return (
        <ScrollView style={{ flex: 1, paddingBottom: 10 }} >
            <SearchBar />

            {/* Route Possibility Link Button */}
            <View style={styles.routeCheckView}>
                <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 10 }}>Click below to check any route possibility</Text>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '90%', marginTop: 10 }} >
                    <Icon name='fact-check' iconStyle={styles.iconRouteCheck}
                        onPress={() => navigation.navigate('RoutePossibility')} />
                    <Text style={styles.label1}>Check Route Possibility</Text>
                </TouchableOpacity>
            </View>

            <Divider />

            {/* Top container for Selecting Depart and Final Location */}
            <View style={styles.TopContainer}>
                <Text style={{ fontSize: 16, alignSelf: 'center', marginBottom: 15 }}>Start planning your trip below</Text>

                <Input
                    label='Departure Location' labelStyle={styles.inputlabel}
                    onChangeText={departLocation => setDepartLocation(departLocation)}
                    containerStyle={styles.input} inputStyle={styles.inputStyle}
                />

                <Input
                    label='Final Location' labelStyle={styles.inputlabel}
                    onChangeText={departLocation => setDepartLocation(departLocation)}
                    containerStyle={styles.input} inputStyle={styles.inputStyle}
                />

                <Button title='Go' onPress={() => { console.log('btn pressed') }}
                    containerStyle={styles.btnCont} buttonStyle={styles.btn}
                />
            </View>
            <Divider />

            {/* Second Container for selecting plan a trip options */}
            <View style={styles.secondContainer}>
                <Text style={styles.label}>Number of Days</Text>
                <NumericInput onChange={numDays => setNumDays(numDays)}
                    minValue={1} rounded containerStyle={styles.numCounter}
                    iconStyle={{ color: 'white' }} totalWidth={100} value={numPerson}
                    rightButtonBackgroundColor='#1A936F'
                    leftButtonBackgroundColor='#1A936F' />

                {/* SELECT STAYS */}
                <Text style={styles.label}>Select your night stays</Text>
                <View style={styles.staysView}>
                    <DropDownPicker
                        open={stayPickerOpen}
                        value={stayValue}
                        items={stayDestinations}
                        setOpen={setStayPickerOpen}
                        setValue={setStayValue}
                        setItems={setStayDestinations}
                        placeholder='Select Destination'
                    />
                </View>

                {/* Select number of persons */}
                <Text style={styles.label}>Number of Persons</Text>
                <NumericInput onChange={numPerson => setNumPerson(numPerson)}
                    minValue={1} rounded containerStyle={styles.numCounter}
                    iconStyle={{ color: 'white' }} totalWidth={100} value={numPerson}
                    rightButtonBackgroundColor='#1A936F'
                    leftButtonBackgroundColor='#1A936F' />

                <Button title='Calculate Approximate Budget' onPress={() => { console.log('btn pressed') }}
                    containerStyle={styles.btnCalculate} buttonStyle={styles.btn}
                />
            </View>

            {/* Budget Calculate Output */}
            <View style={styles.outputView}>
                <Text>Minimum Budget: 24000 PKR</Text>
                <Text>Maximum Budget: 50000 PKR</Text>
            </View>


            {/* Generate Planm Button */}
            <Button title='Generate Trip Plan' onPress={() => { console.log('btn pressed') }}
                containerStyle={styles.btnGenerateCont} buttonStyle={styles.btnGenerate}
            />

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    iconRouteCheck: {
        fontSize: 50,
        color: '#1A936F',
        marginTop: 10
    },
    routeCheckView: {
        alignItems: 'center',
        marginBottom: 15
    },
    label1: {
        fontSize: 18,
        color: '#114B5F',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10
    },
    TopContainer: {
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    secondContainer: {
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: '7%',
        paddingBottom: 10
    },
    input: {
        width: '96%',
    },
    inputStyle: {
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 4,
        paddingHorizontal: 5,
        marginTop: 4
    },
    inputlabel: {
        color: '#114B5F'
    },
    btnCont: {
        width: '20%',
        alignSelf: 'flex-start',
        marginLeft: '5%'
    },
    btn: {
        backgroundColor: '#114B5F'
    },
    numCounter: {
        alignSelf: 'flex-start',
        marginTop: 5
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#114B5F',
        fontWeight: 'bold',
        marginTop: 10
    },
    btnCalculate: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 20
    },
    staysView: {
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderStyle: 'solid',
        width: '100%',
        borderRadius: 7,
        marginTop: 5,
        paddingHorizontal: 8,
        paddingVertical: 10,
        zIndex: 1
    },
    outputView: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        borderColor: '#114B5F',
        borderRadius: 5,
        borderWidth: 0.5,
        width: '87%',
        alignSelf: 'center'
    },
    btnGenerate: {
        backgroundColor: '#1A936F'
    },
    btnGenerateCont: {
        width: '87%',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10
    }
})

export default PlanATripScreen
