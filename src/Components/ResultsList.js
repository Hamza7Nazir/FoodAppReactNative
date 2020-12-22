import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetails from "./ResultDetails";
import withNavigation from "react-navigation"; // without using props to pass on navigation property

const ResultsList = ({title, results, navigation}) =>{

    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal = {true} // also horizontal 
                showsHorizontalScrollIndicator = {false}
                data= {results}
                keyExtractor = {(results) => results.id}

                renderItem= {({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress= {()=>navigation.navigate('ResultsShow', {id: item.id})}>   
                            <ResultDetails result = {item}/> 
                        </TouchableOpacity>)// -----------------------------------------second argument is the aditional information so we can know which item was clicked
                }}

            />
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }
})
export default withNavigation(ResultsList);