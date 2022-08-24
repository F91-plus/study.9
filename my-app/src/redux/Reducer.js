  // redux
function reducer(state, action) {
    // console.log(state);
    // console.log(action);
switch (action.type) {
    case 'add':
        return state + 1;
    default:
        return state;
    }
}

export default reducer