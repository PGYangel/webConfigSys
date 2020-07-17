export default (state='欢迎', action)=>{
    switch (action.type) {
        case 'CHOICE':
            return action.value
        default:
            return state
    }
}
