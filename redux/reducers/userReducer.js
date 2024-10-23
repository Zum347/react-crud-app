const initialState = {
    todos: [],
    category: [],
};

const userReducer = (state= initialState, action )=> {
    switch (action.type){
        case 'ADD_user':
            return 'BOŞ';

            case 'REMOVE_user':
                return 'BOŞ';

                default:
                    return state;
    }
};

export default userReducer;