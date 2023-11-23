import {useEffect} from "react";

export const useSearch = (data, searchValue, setResults) => {
    useEffect(() => {
        const filterSearch = () => {
            let result = [];

            if (searchValue.trim().length < 2) {
                result = [];
            } else if (searchValue.trim().length >= 2) {
                result = data.results.filter(item => {
                    return item.title.toLowerCase().startsWith(searchValue.trim().toLowerCase())
                })
            }

            setResults(result);
        }

        filterSearch();
    }, [searchValue]);
}