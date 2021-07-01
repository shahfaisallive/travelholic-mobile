import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, LogBox } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik, Form, Field, FieldArray } from 'formik';
import axios from "../../components/supportComponents/axios"




// Planner components
import SearchBar from '../../components/supportComponents/SearchBar';

const PlanATripScreen = ({ navigation }) => {
    const [stopsLoader,setStopsLoader]=useState(false)
    const [calculateBudgetLoader,setCalculateBudgetLoader]=useState(false)
      const [destinations,setDestinations] = useState([])
      const [displayTripTable,setDisplayTripTable] = useState(false)
      const [displayGenerateButton,setDisplayGenerateButton] = useState(false)
      const [displayEstimateButton,setDisplayEstimateButton] = useState(false)
      const [stops,setStops] = useState([])
      const [minHotel,setMinHotel] = useState(0)
      const [maxHotel,setMaxHotel] = useState(0)
      const [minTravel,setMinTravel] = useState(0)
      const [maxTravel,setMaxTravel] = useState(0)
      const [minTotal,setMinTotal] = useState(0)
      const [maxTotal,setMaxTotal] = useState(0)
      const [to,setTo] = useState('')
      const [from,setFrom] = useState('')
      const [departure,setDeparture] = useState('')
      const [final,setFinal] = useState('')
      const [disable,setDisable] = useState(false)
      const [luxury,setLuxury] = useState([])
      const [budget,setBudget] = useState([])


    const [fromPickerOpen, setFromPickerOpen] = useState(false)
    const [fromValue, setFromValue] = useState(null)
    const [toValue, setToValue] = useState(null)
    const [toPickerOpen, setToPickerOpen] = useState(false)
    const [fromDestinations, setFromDestinations] = useState([
    { label: 'Dir', value: 'Dir' },
        { label: 'Chitral', value: 'Chitral' }
    ])
    const [toDestinations, setToDestinations] = useState([
        { label: 'Dir', value: 'Dir' },
        { label: 'Chitral', value: 'Chitral' }
    ])
      useEffect(()=>{
          axios.get('/tripplannerdestination/')
          .then(res=>{
              console.log(res.data)
              setDestinations(res.data)
          })
          .catch(err=>{
              console.log(err)
          })
      },[])
     const initialValues = {
        numberOfStops: '',
        persons:'',
        destinations: []
    };
  
    const onGenerateTripPlan = (e)=>{
      e.preventDefault()
      setDisplayTripTable(true)
      setDisplayGenerateButton(true)
    }
  
    function onChangeTickets(e, field, values, setValues) {
        // update dynamic form
        const destinations = [...values.destinations];
        const numberOfStops = e.target.value || 0;
        const previousNumber = parseInt(field.value || '0');
        if (previousNumber < numberOfStops) {
            for (let i = previousNumber; i < numberOfStops; i++) {
                destinations.push('');
            }
        } else {
            for (let i = previousNumber; i >= numberOfStops; i--) {
                destinations.splice(i, 1);
            }
        }
        setValues({ ...values, destinations });
  
        // call formik onChange method
        field.onChange(e);
    }
    function checkArrayForEmptyIndex(arr){
      for (let index = 0; index < arr.length; index++) {
        if (arr[index]==='' || arr[index]===undefined){
          return true
        }
      }
      return false
    }
    // function checkArrayForRepeatedValue(arr){
    //   let nextIndex=1
    //   for (let index = 0; index < arr.length; index++) {
    //     if (arr[index]===arr[nextIndex]){
    //       return true
    //     }
    //     nextIndex++
    //   }
    //   return false
    // }
    function getStops(){
      setStopsLoader(true)
      console.log(to,from)
      if ((to==='' || undefined)||(from==='' || undefined)){
        toast.warning("Please Select Both Departure and Final Location", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else {
        axios.post('/tripplannerdestination/coordinates/destinations',{'to':to,'from':from})
        .then(res=>{
          console.log(res.data)
          if (res.data.length===0){
            reset()
          }else{
  
            setStops(res.data)
          }
        setStopsLoader(false)
  
        })
        .catch(err=>{
          console.log(err)
          setStopsLoader(false)
        })
        setDisable(true)
  
      }
      
    }
    function reset(){
      setStops([])
      setDisable(false)
      setMinTotal(0)
      setMaxTotal(0)
      setMinHotel(0)
      setMaxHotel(0)
      setMinTravel(0)
      setMaxTravel(0)
      setDisplayTripTable(false)
      setDisplayEstimateButton(false)
      setDisplayGenerateButton(false)
    }
    function handleOnChangeDeparture(e) {
      setFrom(e.target.value);
      const selectedIndex = e.target.options.selectedIndex;
      setDeparture(e.target.options[selectedIndex].getAttribute('data'))
    }
    function handleOnChangeFinal(e) {
      setTo(e.target.value);
      const selectedIndex = e.target.options.selectedIndex;
      setFinal(e.target.options[selectedIndex].getAttribute('data'))
    }
    function onSubmit(fields) {
      setCalculateBudgetLoader(true)
      // display form field values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
      if (fields.destinations.length===''){
        toast.warning("Please Fill Up The Form", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else if (fields.persons==='' || fields.persons===undefined) {
        toast.warning("Please Select Number of Persons", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else if (checkArrayForEmptyIndex(fields.destinations)) {
        toast.warning("Your Form is Incomplete", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else {
        var destinations = []
        destinations.push(...fields.destinations);
        destinations.unshift(departure)
        destinations[destinations.length] = final
        axios.post('/plan/estimate',{destinations:destinations})
        .then(res=>{
          console.log(res.data)
          setMinHotel(fields.persons*res.data.minHotel)
          setMaxHotel(fields.persons*res.data.maxHotel)
          setMinTravel(fields.persons*res.data.minTransportFare)
          setMaxTravel(fields.persons*res.data.maxTransportFare)
          setMinTotal(fields.persons*res.data.newMinEstimate)
          setMaxTotal(fields.persons*res.data.newMaxEstimate)
          setLuxury(res.data.luxury)
          setBudget(res.data.budget)
          setDisplayEstimateButton(true)
          setCalculateBudgetLoader(false)
        })
        .catch(err=>{ 
          toast.warning(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER
          });
          setCalculateBudgetLoader(false)
        })
      }
    }
  
    return (
      <ScrollView style={{flex:1,paddingBottom:10}}>
        <SearchBar/>

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

        <View style={styles.TopContainer} >
            <Text style={{ fontSize: 16, alignSelf: 'center', marginBottom: 15 }}>Start planning your trip below</Text>

            <Text style={styles.label}>Departure Location</Text>
            <DropDownPicker
                open={fromPickerOpen}
                value={fromValue}
                items={fromDestinations}
                setOpen={setFromPickerOpen}
                setValue={setFromValue}
                setItems={setFromDestinations}
                containerStyle={styles.pickerStyle}
                zIndex={10001}
                searchable={false}
                placeholder='Select First Destination'
            />
            <Text style={styles.label}>Arrivaal Location</Text>
            <DropDownPicker
                open={fromPickerOpen}
                value={fromValue}
                items={fromDestinations}
                setOpen={setFromPickerOpen}
                setValue={setFromValue}
                setItems={setFromDestinations}
                containerStyle={styles.pickerStyle}
                zIndex={10001}
                searchable={false}
                placeholder='Select First Destination'
            />
            <Button 
                title='Go' 
                onPress={() => { console.log('btn pressed') }}
                containerStyle={styles.btnCont} buttonStyle={styles.btn}
            />
        </View>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({values, setValues }) => (
        <View>
          <View >
            
            {
              stops.length ===0 ?
              <View className=" mt-3">
                
                 <Button 
                    title='Check Route' 
                    onPress={getStops}
                    containerStyle={styles.btnCheckCont} buttonStyle={styles.btnCheck}
                    loading={stopsLoader}
                />
                
              </View>
              :
              <View>
                <View className="form-group mt-2">
                  <label className='font-weight-bold mr-1'>Number of Days</label>
                  <Field name="numberOfStops">
                    {({ field }) => (
											<select className='w-10 ml-2' {...field} onChange={e => onChangeTickets(e, field, values, setValues)}>
													<option value=""></option>
													{[1,2,3,4,5,6,7,8,9,10].map(i => 
															<option key={i} value={i-1}>{i}</option>
													)}
											</select>
                    )}
                    </Field> 
                </View>
                
                <View>
              <View className="list-group-item w-25 mt-2">
                <View className="form-group ">
                    <label className='font-weight-bold'>Persons</label>
                    <Field className='w-100' name='persons' type='select' as={Select} >
                        <option value ='1'></option>
                        <option value ='1'>1</option>
                        <option value ='2'>2</option>
                        <option value ='3'>3</option>
                        <option value ='4'>4</option>
                        <option value ='5'>5</option>
                    </Field>
                </View>
              </View>
            </View>
            <View className=" mt-3">
                <Button 
                    title='Check Route' 
                    onPress={getStops}
                    containerStyle={styles.btnCheckCont} buttonStyle={styles.btnCheck}
                    loading={calculateBudgetLoader}
                />
            </View>
            {
              minTotal > 0 ? 
               (
                <View style={styles.outputView}>
                    <Text>Minimum Hotel Expense: {minHotel}rs </Text>
                    <Text>Maximum Hotel Expense: {maxHotel}rs</Text>
                    <Text>Maximum Travel Expense: {maxTravel}rs</Text>
                    <Text>Minimum Travel Expense: {minTravel}rs</Text>
                    <Text>Total Estimate Budget Range: {minTotal}rs - {maxTotal}rs</Text>
                </View>

              ):
              (
                <View style={styles.outputView}>
                    <Text>Estimated Budget Will Be Displayed Here</Text>
                </View>
              )
            }
            {
              minTotal > 0 ?
                <Button 
                    title='Generate Plan Trip' 
                    onPress={() => { console.log('btn pressed') }}
                    containerStyle={styles.btnCont} buttonStyle={styles.btn}
                    disabled={displayGenerateButton}
                />
               :
                <></>
            }
            {/* {
              luxury.length > 0 && budget.length >0 ?
              <TripPlanTable persons={values.persons} display = {displayTripTable} luxuryTotal={maxTotal} budgetTotal={minTotal} luxury={luxury} budget={budget}/>:
              <></>
            } */}
                <View className=" mt-3">

                    <Button 
                        title='Plan Another Trip' 
                        onPress={reset}
                        containerStyle={styles.btnCheckCont} buttonStyle={styles.btnCheck}
                            
                    />
                
                </View>
  
            </View>
            }
            
          </View>
        </View>
        )}
      </Formik>
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
