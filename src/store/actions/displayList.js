export const update_search_state = (newState) => {
    return {
        type: 'UPDATE_SEARCH_STATE',
        payload: {newState}
    }
}

export const update_fetch_data = (fetchData) => {
    return {
        type: 'UPDATE_FETCH_DATA',
        payload: {fetchData}
    }
}
