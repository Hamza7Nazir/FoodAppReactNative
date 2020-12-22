import React, {useState, useEffect}  from 'react';
import { View, Text, StyleSheet } from "react-native";
import yelp from '../api/yelp';
const ResultsShowScreen = ({navigation}) =>{

    const [result, setResult] = useState(null);

    const id = navigation.getParam('id'); // getting the id from navigation parameter from  onPress= {()=>navigation.navigate('ResultsShow', {id: item.id})}>   

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect (()=> {
        getResult(id);
    }, []);  // will work only once
    console.log(id);
    return(
        <>
        <Text>ResultsShowScreen</Text>
        </>
    )
}
const style= StyleSheet.create({

})
export default ResultsShowScreen;