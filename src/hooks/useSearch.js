import {useEffect} from "react";

export const useSearch = (isLiveSearchActive, data, searchValue, setResults) => {
    useEffect(() => {
        const filterSearch = () => {
            if (!isLiveSearchActive) return;

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