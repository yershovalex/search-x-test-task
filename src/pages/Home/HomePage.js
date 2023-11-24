import React from 'react';
import {HomeTitle, HomeWrapper} from "./styled";
import SearchComponent from "../../components/SearchBar/SearchComponent";
import {useNavigate, useSearchParams} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleSearch = (searchValue) => {
        if (searchValue.trim().length !== 0) {
            navigate(`/search?q=${searchValue}`);
        }
    }

    return (
        <HomeWrapper>
            <HomeTitle>Search X</HomeTitle>
            <SearchComponent handleSearch={handleSearch} autoFocus={true}/>
        </HomeWrapper>
    );
};

export default HomePage;