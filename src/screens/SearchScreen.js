import React, {useState} from 'react';
import { View, Text, StyleSheet } from "react-native";
import SearchBar  from "../Components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])


    const searchApi = async() =>{
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses)
    }
    return (
        <View>
            <SearchBar
                term = {term}
                onTermChange = {newTerm => setTerm(newTerm)}
                onTermSubmit = {searchApi}
                
            />
            <Text>Results found are  {results.length}</Text>
            <Text></Text>
        </View>
    )
}

const style = StyleSheet.create({
    basicStyle: {
        fontSize: 35
    }
})

export default SearchScreen;