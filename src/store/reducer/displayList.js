const initState = {
    fetchData: null,
    searchState: {hemisphere: 0, month: 0, location: 0, shadowSize: 0}
}

export default (state=initState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_STATE':
          return Object.assign({}, state, {
            searchState: action.payload.newState
          })
        case 'UPDATE_FETCH_DATA':
            return Object.assign({}, state, {
                fetchData: action.payload.fetchData
            })
        default:
          return state
    }
}