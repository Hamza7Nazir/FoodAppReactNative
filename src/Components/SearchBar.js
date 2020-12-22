import React  from 'react';
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";


const SearchBar = ({term, onTermChange, onTermSubmit}) => {


    return (
        <View style = {style.backgroundStyle}>
        <Feather 
        style = {style.iconStyle}
        name="search"
          />
            <TextInput 
            autoCorrect = {false}
            autoCapitalize = 'none'
            style = {style.inputStyle} 
            placeholder = 'Search'
            value = {term}
            onChangeText = { onTermChange}
            onEndEditing= {onTermSubmit}

            />
        </View>
    )
}

const style = StyleSheet.create({
    backgroundStyle: {
        fontSize: 15,
        borderWidth: 1,
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row',
        marginTop: 15
       
    },
    inputStyle: {
       fontSize: 18,
       flex: 1
    },
    iconStyle: {
        fontSize: 35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 10

    }
})

export default SearchBar;