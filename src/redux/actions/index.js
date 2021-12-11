import {createActions, createAction} from 'redux-actions';
export const getType = (reduxAction) => {
    return reduxAction().type;
};
export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (Error)=>Error,
});

export const createPost = createActions({
  createPostRequest: (payload) => payload,
  createPostSuccess: (payload) => payload,
  createPostFailure: (Error) => Error,
});

export const updatePost = createActions({
  updatePostRequest: (payload) => payload,
  updatePostSuccess: (payload) => payload,
  updatePostFailure: (Error) => Error,
});

export const deleteByID = createActions({
    deleteByIDRequest: (payload) => payload,
    deleteByIDSuccess: (payload) => payload,
    deleteByIDFailure: (Error) => Error,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');