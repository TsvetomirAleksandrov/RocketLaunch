const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PAGE':
            return {
                ...state,
                state: action.pageNumber
            }

        default:
            return state;
    }
}

export default reducer;