import React from 'react';
import {RemoveButton, SearchItem, SearchItemText} from "./styled";
import * as PropTypes from "prop-types";

SearchItemText.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node
};
const LiveSearchItem = ({item, handleLiveSearchClick, isVisited, removeFromVisited, setRefresh}) => {
    return (
        <SearchItem onClick={() => handleLiveSearchClick(item)}>
            <SearchItemText $active={isVisited(item.id)}>{item.title}</SearchItemText>
            <RemoveButton
                onClick={(e) =>
                    removeFromVisited(e, item.id, setRefresh(prevState => !prevState
                ))}
            >
                remove
            </RemoveButton>
        </SearchItem>
    );
};

export default LiveSearchItem;