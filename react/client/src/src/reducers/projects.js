export default (state = [], action) => {
    switch (action.type) {
        case 'SETLIST':
            return action.value;
        default:
            return state;
    }
}
