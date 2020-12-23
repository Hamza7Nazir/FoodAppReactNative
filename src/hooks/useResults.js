import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')


    const searchApi = async  (initialSearchVal) =>{ //async initialSearchVal =>{
       try
       {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: initialSearchVal,
                location: 'san jose'
            }
        }); 
        setResults(response.data.businesses)
    }
    catch (err){
       setErrorMessage('Oops Something went wrong')
    }
    }

    useEffect( () =>{ // Runs only first time if second argument is empty list
        searchApi('pasta')
    }, [])

return [searchApi, results,errorMessage]
}