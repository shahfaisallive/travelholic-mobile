import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, LogBox,SafeAreaView } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik, Form, Field, FieldArray } from 'formik';
import axios from "../../components/supportComponents/axios"
import Constants from 'expo-constants';

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
  const [data,setData] = useState([])
  const [daysDropdown,setDaysDropdown] = useState([
    {label:1,value:1},
    {label:2,value:2},
    {label:3,value:3},
    {label:4,value:4},
    {label:5,value:5},
    {label:6,value:6},
    {label:7,value:7},
    {label:8,value:8},
    {label:9,value:9},
    {label:10,value:10},
  ])


  const [toPickerOpen, setToPickerOpen] = useState(false) 
  const [fromPickerOpen, setFromPickerOpen] = useState(false) 
  const [daysPickerOpen, setDaysPickerOpen] = useState(false) 
  const [fromValue, setFromValue] = useState(null)
  const [toValue, setToValue] = useState(null) 

  useEffect(()=>{
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    axios.get('/tripplannerdestination/')
    .then(res=>{
      setDestinations([])
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

  function onChangeTickets(value, field, values, setValues) {
      // update dynamic form
      const destinations = [...values.destinations];
      const numberOfStops = value || 0;
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
        }
        else {
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
  function handleOnChangeDeparture(val) {
    const departurex = data.find(element => element.north_coordinate.$numberDecimal === val)
    setDeparture(departurex)
    console.log("departure",val)
  }
  function handleOnChangeFinal(val) {
    const finalx = data.find(element => element.north_coordinate.$numberDecimal === val)
    setFinal(finalx)
    console.log("final",val)
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
    <View style={styles.container} >
      <SearchBar/>
      <Divider />
      <View style={styles.routeCheckView}>
        <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 10 }}>Click below to check any route possibility</Text>
        <TouchableOpacity style={{ backgroundColor: 'white', width: '90%', marginTop: 10 }} >
          <Icon name='fact-check' iconStyle={styles.iconRouteCheck}
          onPress={() => navigation.navigate('RoutePossibility')} />
          <Text style={styles.label1}>Check Route Possibility</Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.label}>Departure Location</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer} nestedScrollEnabled={true} contentContainerStyle={{flexGrow:1}}>
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
          onChangeValue={(value) => {
            handleOnChangeDeparture(value)
          }}
          listMode="SCROLLVIEW"
          placeholder='Select Departure Destination'
        />
        <Text style={styles.label}>Arrival Location</Text>
        <DropDownPicker
          open={toPickerOpen}
          value={toValue}
          items={destinations}
          setOpen={setToPickerOpen}
          setValue={setToValue}
          setItems={setDestinations}
          containerStyle={styles.pickerStyle}
          searchable={false}
          onChangeValue={(value) => {
            handleOnChangeFinal(value)
          }}
          listMode="SCROLLVIEW"
          placeholder='Select Arrival Destination'
        />
        <Button 
          title='Go' 
          onPress={() => { console.log('btn pressed') }}
         containerStyle={styles.btnCont} buttonStyle={styles.btn}
        />
      </ScrollView>
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    padding: 8,
  },
  scrollContainer: {
    width:"90%",
    alignItems: 'center',
    borderColor:"#114B5F",
    borderStyle:'solid',
    borderWidth:10
  },
  label: {
    paddingLeft:20,
    fontSize: 16,
    color: '#114B5F',
    fontWeight: 'bold',
    marginTop: 10
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 5
  },
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
    marginTop:10,
    width: '90%',
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
  pickerStyle: {
    width: '95%',
    marginTop: 10,
    paddingLeft:20,
  },
  btnGenerateCont: {
    width: '87%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  }
})

export default PlanATripScreen
