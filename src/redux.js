import { createStore, combineReducers } from 'redux';

const createId = () => Date.now();

const books = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_BOOK':
      return [...state, { id: createId(), title: payload }];
    case 'UPDATE_BOOK':
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, title: payload.bookName };
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
  switch (type) {
    case 'ADD_READER':
      return [...state, { id: createId(), name: payload }];
    case 'UPDATE_READER':
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, title: payload.name };
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
  books,
  readers,
});

const store = createStore(reducer);

const addBook = bookName => ({ type: 'ADD_BOOK', payload: bookName });
const removeBook = bookName => ({ type: 'REMOVE_BOOK', payload: bookName });
const updateBook = (id, bookName) => ({
  type: 'UPDATE_BOOK',
  payload: { id, bookName },
});
const addReader = name => ({ type: 'ADD_READER', payload: name });
const updateReader = (id, name) => ({ type: 'UPDATE_READER', payload: { id, name } });
const removeReader = id => ({ type: 'REMOVE_READER', payload: id });

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
console.log('---- add reader');
store.dispatch(addReader('Reader 1'));
store.dispatch(addReader('Reader 2'));
store.dispatch(updateReader(store.getState().readers[0].id, 'Reader 1'));
store.dispatch(removeReader(store.getState().readers[0].id));
