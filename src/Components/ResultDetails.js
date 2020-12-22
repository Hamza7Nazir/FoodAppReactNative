import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const ResultDetails = ({result}) =>{

    return (
        <View style= {style.main}>
        <Image style= {style.image} source = {{uri: result.image_url}}/>
           <Text style={style.name}>{result.name}</Text>
           <Text>
           {result.rating} Stars, {result.review_count} Reviews
           </Text>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width:250,
        height: 250,
        borderRadius: 3
    },
    name: {
        fontWeight: 'bold',
        fontSize:14
    },
    main: {
        marginBottom: 10,
        marginRight: 15
    }
   
})
export default ResultDetails;