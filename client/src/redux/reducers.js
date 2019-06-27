const initialStateUser = {
    loggedIn: false,
    firstName: 'Guest',
    lastName: null,
    email: null,
    id: null,
    created: null,
    modified: null
}

export const loginReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case 'LOG_IN':
            state = {
                ...state,
                loggedIn: true,
                firstName: action.payload.firstName,
                lastName: action.payload.firstName,
                email: action.payload.email,
                id: action.payload.id,
                created: action.payload.created,
                modified: action.payload.modified
            }
            break;
        case 'LOG_OUT':
            state = {
                ...state,
                loggedIn: false,
                firstName: 'Guest',
                lastName: null,
                email: null,
                id: null,
                created: null,
                modified: null
            }
            break;
        default:
            return state
    }
    return state;
}

const initialStatePost = {
    loaded: false,
    posts: [],
    length: 0,
    filter: ''
}

export const postReducer = (state = initialStatePost, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            state = {
                ...state,
                posts: action.payload,
                length: action.payload.length,
                loaded: true
            }
            break;
        case 'APPEND_POSTS':
            state = {
                ...state,
                posts: [...state.posts, action.payload],
                length: state.length + action.payload.length,
                loaded: true
            }
            break;
        case 'PREPARE_FOR_LOAD':
            state = {
                ...state,
                loaded: false
            }
            break;
        case 'SEARCH':
            state = {
                ...state,
                filter: action.payload
            }
            break
        default:
            return state
    }
    return state;
}