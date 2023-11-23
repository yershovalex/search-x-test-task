import React, {useState} from 'react';
import {SearchInput, SearchWrapper} from "./styled";
import LiveSearchComponent from "../LiveSearch/LiveSearchComponent";
import {useSearch} from "../../hooks/useSearch";
import mockedSearch from "../../mock/mockedSearch.json";

const SearchComponent = ({autoFocus, handleSearch}) => {
    const [searchValue, setSearchValue] = useState('');
    const [liveSearch, setLiveSearch] = useState([]);
    useSearch(mockedSearch, searchValue, setLiveSearch);

    const storeVisitedLinks = (id) => {
        const visitedStorage = localStorage.getItem('visitedLinks');
        const visitedArr = visitedStorage ? JSON.parse(visitedStorage) : []
        if (!visitedArr.includes(id)) {
            visitedArr.push(id);
            localStorage.setItem('visitedLinks', JSON.stringify(visitedArr));
        }
    }

    const handleLiveSearchClick = (item) => {
        setSearchValue(item.title)
        handleSearch(item.title);
        storeVisitedLinks(item.id);

        setTimeout(() => {
            setLiveSearch([]);
        }, 100);
    }

    return (
        <SearchWrapper>
            <SearchInput
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus={autoFocus ?? false}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch(searchValue)
                    }
                }}
            />
            <LiveSearchComponent
                liveSearch={liveSearch}
                handleLiveSearchClick={handleLiveSearchClick}/>
        </SearchWrapper>
    );
};

export default SearchComponent;