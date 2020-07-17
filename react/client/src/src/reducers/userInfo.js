export default (state = {}, action) => {
    switch (action.type) {
        case 'SETINFO':
            return action.value;
        default:
            return state;
    }
}
