const Reducer = (state, action) => {
    switch (action.type) {
        case 'update_tray':
            return {
                ...state,
                tray: action.payload.tray
            };
        default:
            return {
                ...state
            };
    }
};

export default Reducer;