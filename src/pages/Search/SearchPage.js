import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import mockedSearch from "../../mock/mockedSearch.json";
import SearchPageItem from "../../components/SearchPageItem/SearchPageItem";
import {InfoContainer, SearchPageHeader, SearchPageHeaderTitle, SearchPageWrapper} from "./styled";
import SearchComponent from "../../components/SearchBar/SearchComponent";

const SearchPage = () => {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const [params, _] = useSearchParams();
    const searchQuery = params.get('q');

    const handleSearch = (searchValue) => {
        navigate(`/search?q=${searchValue}`);
    }

    useEffect(() => {
        if (!searchQuery || searchQuery.length === 0) {
            navigate('/');
        }
    }, [searchQuery]);

    useEffect(() => {
        const filteredSearch = mockedSearch.results.filter(item => {
            return item.title.toLowerCase().startsWith(searchQuery?.trim()?.toLowerCase())
        })

        setSearchResults(filteredSearch);
    }, [searchQuery]);


    return (
        <SearchPageWrapper>
            <SearchPageHeader>
                <SearchPageHeaderTitle to="/">Search X</SearchPageHeaderTitle>
                <SearchComponent autoFocus={false} handleSearch={handleSearch}/>
            </SearchPageHeader>
            <InfoContainer>Results: {searchResults.length}</InfoContainer>
            {
                searchResults.map((item) => {
                    return <SearchPageItem key={item.id} item={item}/>
                })
            }
        </SearchPageWrapper>
    );
};

export default SearchPage;