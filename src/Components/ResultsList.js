import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";

const ResultsList = ({title, results}) =>{

    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal = {true} // also horizontal 
                showsHorizontalScrollIndicator = {false}
                data= {results}
                keyExtractor = {(results) => results.id}

                renderItem= {({item}) => {
                    return <ResultDetails result = {item}/>
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
export default ResultsList;