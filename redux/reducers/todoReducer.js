const initialState = {
    todos: [],
    category: [],
};

const todoReducer = (state= initialState, action )=> {
    switch (action.type){
        case 'ADD_TODO':
            const tempTodos = state.todos.concat(action.payload);

            return { ...state, todos: tempTodos };

            case 'REMOVE_TODO':
                const filtred= state.todos.filter(
                    (todo) => todo.id !== action.payload
                );
                return {...state, todos: filtred };

                case 'UPDATE_TODO':
                    const copyTodos = [...state.todos];
                    const index= copyTodos.findIndex(
                        (todo) => todo.id === action.payload.id
                    );
                    copyTodos.splice(index, 1, action.payload);
                    return { ...state, todos: copyTodos };


                default:
                    return state;
    }
};

export default todoReducer;