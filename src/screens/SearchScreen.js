import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from "react-native";
import SearchBar  from "../Components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
   const [searchApi, results, errorMessage] = useResults();
    return (
        <View>
            <SearchBar
                term = {term}
                onTermChange = {val =>setTerm(val)}  // also onTermChange = {setTerm}
                onTermSubmit = {()=>searchApi(term)}
                
            />
            <Text>Results found are  {results.length}</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null }
        </View>
    )
}

const style = StyleSheet.create({
    basicStyle: {
        fontSize: 35
    }
})

export default SearchScreen;