import React from 'react';
import {
    SearchResultItemContainer,
    SearchResultItemDescription,
    SearchResultItemLink,
    SearchResultItemTitle
} from "./styled";

const SearchPageItem = (props) => {
    const { id, title, description, link } = props.item;
    const { isVisited } = props;

    return (
        <SearchResultItemContainer>
            <SearchResultItemLink>{link}</SearchResultItemLink>
            <SearchResultItemTitle $active={isVisited(id)}>{title}</SearchResultItemTitle>
            <SearchResultItemDescription>{description}</SearchResultItemDescription>
        </SearchResultItemContainer>
    );
};

export default SearchPageItem;