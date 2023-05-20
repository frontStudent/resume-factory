const basicReducer = (state = { sex: '男', from: '上海', age: 18 }, action) => {
    console.log(state, 'state');
    switch (action.type) {
        case 'SUBMIT':
            return { ...state, ...action.value }
        default:
            return state
    }
}
export default basicReducer