import React, {useState} from 'react';
import {LiveSearchWrapper} from "./styled";
import LiveSearchItem from "./LiveSearchItem/LiveSearchItem";

const LiveSearchComponent = ({liveSearch, handleLiveSearchClick}) => {
    // in real components we get data from a database or other places, it would be desirable
    // to set the “visited” flags, but in this case we store the data in local storage,
    // and when we delete an element from it, redrawing will not happen, so “refresh” - is a hack
    // that should not be used outside of this test task
    const [refresh, setRefresh] = useState(false);

    const isVisited = (id) => {
        const visitedStorage = localStorage.getItem('visitedLinks');
        const visitedArr = visitedStorage ? JSON.parse(visitedStorage) : []
        return visitedArr.includes(id)
    }

    const removeFromVisited = (e, id) => {
        e.stopPropagation();
        const visitedStorage = localStorage.getItem('visitedLinks');
        const visitedArr = visitedStorage ? JSON.parse(visitedStorage) : []
        const index = visitedArr.findIndex(item => item === id)

        if (index !== -1) {
            visitedArr.splice(index, 1)
        }

        localStorage.setItem('visitedLinks', JSON.stringify(visitedArr))
        setRefresh((prevState) => !prevState);
    }

    return (
        <LiveSearchWrapper liveSearch={liveSearch}>
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