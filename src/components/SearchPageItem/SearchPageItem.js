import React from 'react';
import {
    SearchResultItemContainer,
    SearchResultItemDescription,
    SearchResultItemLink,
    SearchResultItemTitle
} from "./styled";

const SearchPageItem = (props) => {
    const {title, description, link} = props.item;

    return (
        <SearchResultItemContainer>
            <SearchResultItemLink>{link}</SearchResultItemLink>
            <SearchResultItemTitle>{title}</SearchResultItemTitle>
            <SearchResultItemDescription>{description}</SearchResultItemDescription>
        </SearchResultItemContainer>
    );
};

export default SearchPageItem;