import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'react-native-elements';
import axios from "../../components/supportComponents/axios"



const RoutePossibility = ({ navigation }) => {

    useEffect(()=>{
        setOutput('')
        axios.get('/tripplannerdestination/')
		.then(res=>{
            setDestinations([])
			console.log(res.data)
            res.data.forEach((element)=>{
                setDestinations((curr)=>{
                    return[{label:element.name,value:element._id},...curr]
                })
            })
		})
		.catch(err=>{
			console.log(err)
		})
    },[])

    const checkRoute = (e)=> {
		e.preventDefault()
		if (toValue === undefined || fromValue === undefined ||toValue === ''|| fromValue === ''){
            ToastAndroid.show(
                'Please Select Your Destinations',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
		}
		else {
			// console.log(toValue,fromValue)
			axios.post('/routes/route',{destination_to:toValue,destination_from:fromValue})
			.then(res=>{
				setOutput(res.data.status)
			})
			.catch(err=>{
				console.log(err)
			})
		}
	}
    const [fromPickerOpen, setFromPickerOpen] = useState(false)
    const [fromValue, setFromValue] = useState(null)
    const [toValue, setToValue] = useState(null)
    const [output, setOutput] = useState('')
    const [toPickerOpen, setToPickerOpen] = useState(false)
    const [destinations, setDestinations] = useState([])
    

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Choose any two points to check route possibility</Text>

            <View>
                <Text style={styles.label}>From</Text>
                <DropDownPicker
                    open={fromPickerOpen}
                    value={fromValue}
                    items={destinations}
                    setOpen={setFromPickerOpen}
                    setValue={setFromValue}
                    setItems={setDestinations}
                    containerStyle={styles.pickerStyle}
                    zIndex={10001}
                    searchable={false}
                    placeholder='Select First Destination'
                />

                <Text style={styles.label}>To</Text>
                <DropDownPicker
                    open={toPickerOpen}
                    value={toValue}
                    items={destinations}
                    setOpen={setToPickerOpen}
                    setValue={setToValue}
                    setItems={setDestinations}
                    containerStyle={styles.pickerStyle}
                    searchable={false}
                    placeholder='Select Second Destination'

                />
            </View>

            <Button title='Check Route' onPress={checkRoute}
                containerStyle={styles.btnCheckCont} buttonStyle={styles.btnCheck}
            />

            <View style={styles.outputView}>
                <Text style={styles.outputText}>{output}</Text>
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
