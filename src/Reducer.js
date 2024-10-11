const Reducer = (state, action) => {
    switch (action.type) {
        case 'select_category':
            return {
                ...state,
                selectedCategory: action.payload.selectedCategory
            };
        case 'update_tray':
            return {
                ...state,
                tray: {...action.payload.tray}
            };
        case 'select_item':
            return {
                ...state,
                tray: {...action.payload.tray},
                selectedItem: {...action.payload.selectedItem}
            };
        case 'update_table':
            return {
                ...state,
                table: {...action.payload.table}
            };
        default:
            return {
                ...state
            };
    }
};

export default Reducer;