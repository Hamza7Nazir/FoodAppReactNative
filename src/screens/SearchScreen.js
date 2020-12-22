import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar  from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter (result => {
            return result.price === price;
        })
    }

    return (
        <View style = {style.basicStyle}>
            <SearchBar
                term = {term}
                onTermChange = {val =>setTerm(val)}  // also onTermChange = {setTerm}
                onTermSubmit = {()=>searchApi(term)}
                
            />
            <Text>Results found are  {results.length}</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView>
            <ResultsList results = {filterResultsByPrice('$')} title = 'Cost Effective'/>
            <ResultsList results = {filterResultsByPrice('$$')} title = 'Bit Pricier'/>
            <ResultsList results = {filterResultsByPrice('$$$')} title = 'Big Spender'/>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    basicStyle: {
        margin: 30,
        flex: 1
    }
})

export default SearchScreen;