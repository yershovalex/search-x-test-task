import React, {useState} from 'react';
import {LiveSearchWrapper} from "./styled";
import LiveSearchItem from "./LiveSearchItem/LiveSearchItem";
import {isVisited, removeSearchItemFromVisited} from "../../utils/utils";

const LiveSearchComponent = ({liveSearch, handleLiveSearchClick}) => {
    // in real components we get data from a database or other places, it would be desirable
    // to set the “visited” flags, but in this case we store the data in local storage,
    // and when we delete an element from it, redrawing will not happen, so “refresh” - is a hack
    // that should not be used outside of this test task
    const [_, setRefresh] = useState(false);

    const removeFromVisited = (e, id) => {
        e.stopPropagation();
        removeSearchItemFromVisited(id)
        setRefresh((prevState) => !prevState);
    }

    return (
        <LiveSearchWrapper $liveSearch={liveSearch?.length >= 2}>
            {
                liveSearch.map(item => {
                    return <LiveSearchItem
                        key={item.id}
                        item={item}
                        handleLiveSearchClick={handleLiveSearchClick}
                        isVisited={isVisited}
                        removeFromVisited={removeFromVisited}
                    />
                })
            }
        </LiveSearchWrapper>
    );
};

export default LiveSearchComponent;