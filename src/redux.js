import { createStore, combineReducers, applyMiddleware } from 'redux';

// middlewere
const logger = function(store) {
    return function(next) {
        return function(action) {
            console.log('state', store.getState());
            console.log(action);
            next(action)
        }
    }
};



const createId = () => Math.random();

const books = (state = [], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'ADD_BOOK':
            return [...state, { id: createId(), title: payload }];
        case 'UPDATE_BOOK':
            return state.map((item) => {
                if (item.id === payload.id) {
                    return { ...item, title: payload.newName };
                }

                return item;
            });
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== payload);
        default:
            return state;
    }
};


const readers = (state = [], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'ADD_READER':
            return [...state, { id: createId(), title: payload }];
        case 'UPDATE_READER':
            return state.map((item) => {
                if (item.id === payload.id) {
                    return { ...item, title: payload.newReaderName };
                }

                return item;
            });
        case 'REMOVE_READER':
            return state.filter(reader => reader.id !== payload);
        default:
            return state;
    }
};

const reducer = combineReducers({
    books: books,
    readers: readers,
});

const initialState = {
    books: [],
    readers: [],
};

const store = createStore(reducer, initialState, applyMiddleware(logger));

const addBook = (bookName) => ({ type: 'ADD_BOOK', payload: bookName });
const updateBook = (id, newName) => ({ type: 'UPDATE_BOOK', payload: { id, newName } });
const removeBook = (id) => ({ type: 'REMOVE_BOOK', payload: id });

const addReader = (readerName) => ({ type: 'ADD_READER', payload: readerName });
const updateReader = (id, newReaderName) => ({ type: 'UPDATE_READER', payload: { id, newReaderName } });
const removeReader = (id) => ({ type: 'REMOVE_READER', payload: id });

store.subscribe(() => {
    console.log('From subscribe', store.getState());
});


console.log('------------ initial state');

console.log(store.getState());

console.log('------------- add');
store.dispatch(addBook('Book 1'));
store.dispatch(addBook('Book 2'));
store.dispatch(addBook('Book 3'));
store.dispatch(addBook('Book 4'));

console.log('------------- update');
store.dispatch(updateBook(store.getState().books[0].id, 'Updated Book Title'));

console.log('------------- remove');
store.dispatch(removeBook(store.getState().books[0].id));
store.dispatch(removeBook(store.getState().books[0].id));
store.dispatch(removeBook(store.getState().books[0].id));
store.dispatch(removeBook(store.getState().books[0].id));


console.log('---- add reader');
store.dispatch(addReader('Reader 1'));

