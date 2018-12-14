const ADD_VIDEO = 'ADD_VIDEO';
const EDIT_VIDEO = 'EDIT_VIDEO';
const REMOVE_VIDEO = 'REMOVE_VIDEO';

const INIT = [];

export default function videosReducer(state = [], action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_VIDEO:
            const newItem = {
                title: payload.title,
                url: payload.url,
                tags: payload.tags,
            };

            return [newItem, ...state];
        default:
            return state;
    }
}

export const addTodo = ({ title, url, tags }) => ({
    type: ADD_VIDEO,
    payload: { title, url, tags },
});
