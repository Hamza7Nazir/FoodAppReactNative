import React, {useState, useEffect}  from 'react';
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) =>{

    const [result, setResult] = useState(null);
    
    const id = navigation.getParam('id'); // getting the id from navigation parameter from  onPress= {()=>navigation.navigate('ResultsShow', {id: item.id})}>   

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        console.log(result); // initially result has null before API call, so we need a check
    }
    useEffect (()=> {
        getResult(id);
    }, []);  // will work only once

    if(!result)
    {
        return null; //check for null
    }
    return(
        <>
        <Text>{result.name}</Text>
        <FlatList
            data = {result.photos} // took only photos
            keyExtractor = {(photo) => photo} 
            showsVerticalScrollIndicator = {false}

            renderItem = {({item}) => {
                return(
                    <>
                    <Image style= {style.imageStyle} source = {{uri: item}}/>
                    </>
                )
            }}
        />

        </>
    )
}
const style= StyleSheet.create({
    imageStyle: {
        height:250,
        width: 250,
        marginBottom:10
    }
})
export default ResultsShowScreen;