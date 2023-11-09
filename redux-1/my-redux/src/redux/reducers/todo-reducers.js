const initalState = {
    todos: [
        { id: 1, value: 'Belajar react', completed: false },
        { id: 2, value: 'Belajar redux', completed: false }
    ]
}


function todoReducers(state = initalState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                id: 3,
                value: action.payload
            }
            const cloneTodos = [...state.todos, newTodo]

            return {
                todos: cloneTodos
            }
        default: return state
    }
}

export function addTodo(input) {
    return {
        type: 'ADD_TODO',
        payload: input
    }
}

export default todoReducers;



























// const todoReducers = (state = initalState, action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return {
//                 ...state,
//                 todos: [...state.todos, action.payload]
//             }
//         case 'TOGGLE_TODO':
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => {
//                     if (todo.id === action.payload.id) {
//                         return {
//                             ...todo,
//                             completed: !todo.completed
//                         }
//                     }
//                     return todo
//                 })
//             }
//         default:
//             return state
//     }
// }