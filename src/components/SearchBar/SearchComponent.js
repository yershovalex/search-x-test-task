import React, {useState} from 'react';
import {SearchIcon, SearchInput, SearchWrapper} from "./styled";
import LiveSearchComponent from "../LiveSearch/LiveSearchComponent";
import {useSearch} from "../../hooks/useSearch";
import mockedSearch from "../../mock/mockedSearch.json";

const SearchComponent = ({value, autoFocus, handleSearch}) => {
    const [isLiveSearchActive, setIsLiveSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState(value ?? '');
    const [liveSearch, setLiveSearch] = useState([]);
    useSearch(isLiveSearchActive, mockedSearch, searchValue, setLiveSearch);

    const storeVisitedLinks = (id) => {
        const visitedStorage = localStorage.getItem('visitedLinks');
        const visitedArr = visitedStorage ? JSON.parse(visitedStorage) : []
        if (!visitedArr.includes(id)) {
            visitedArr.push(id);
            localStorage.setItem('visitedLinks', JSON.stringify(visitedArr));
        }
    }

    const disableAndClearLiveSearch = () => {
        setIsLiveSearchActive(prevState => !prevState);
        setLiveSearch([])
    }

    const handleLiveSearchClick = (item) => {
        setSearchValue(item.title)
        handleSearch(item.title);
        storeVisitedLinks(item.id);
        disableAndClearLiveSearch();
    }

    return (
        <SearchWrapper>
            <SearchInput
                type="text"
                value={searchValue}
                $liveSearch={liveSearch.length >= 2}
                onFocus={() => setIsLiveSearchActive(true)}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus={autoFocus ?? false}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch(searchValue)
                        disableAndClearLiveSearch();
                    }
                }}
            />
            <SearchIcon onClick={() => handleSearch(searchValue)}/>
            <LiveSearchComponent
                liveSearch={liveSearch}
                handleLiveSearchClick={handleLiveSearchClick}/>
        </SearchWrapper>
    );
};

export default SearchComponent;