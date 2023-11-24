const getVisitedItemsArray = () => {
    const visitedStorage = localStorage.getItem('visitedLinks');
    return visitedStorage ? JSON.parse(visitedStorage) : [];
}

export const isVisited = (id) => {
    const visitedArr = getVisitedItemsArray();
    return visitedArr.includes(id)
}

export const removeSearchItemFromVisited = (id) => {
    const visitedArr = getVisitedItemsArray();
    const index = visitedArr.findIndex(item => item === id)

    if (index !== -1) {
        visitedArr.splice(index, 1)
    }

    localStorage.setItem('visitedLinks', JSON.stringify(visitedArr))
}

export const removeFromVisited = (e, id, callback) => {
    e.stopPropagation();
    removeSearchItemFromVisited(id)

    if (callback) {
        callback((prevState) => !prevState);
    }
}