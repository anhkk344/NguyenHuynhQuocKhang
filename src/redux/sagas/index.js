import { takeLatest, call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function * fetchPostsSaga(action) {
    try{
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    }catch(Error){
        console.error(Error);
        yield put(actions.getPosts.getPostsFailure(Error));
    }
}

function * createPostSaga(action){
    try{
        console.log('createPostSaga',{action});
        const post = yield call(api.createPost, action.payload);
        console.log('[createPostSaga - post]',post);
        yield put(actions.createPost.createPostSuccess(post.data));

    }catch(Error){
        console.error(Error);
        yield put(actions.createPost.createPostFailure(Error));

    }
}

function * updatePostSaga(action){
    try{
        console.log('updatePostSaga',{action});
        const updatedpost = yield call(api.updatePost, action.payload);
        console.log('[createPostSaga - post]',updatedpost);
        yield put(actions.updatePost.updatePostSuccess(updatedpost.data));

    }catch(Error){
        console.error(Error);
        yield put(actions.updatePost.updatePostFailure(Error));

    }
}

function * deleteByIDSaga(action){
     try{
        console.log('deleteByIDSaga',{action});
        const deletebyid = yield call(api.deleteByID, action.payload);
        console.log('[deleteByIDSaga - post]',deletebyid);
        yield put(actions.deleteByID.deleteByIDSuccess(deletebyid.data));

    }catch(Error){
        console.error(Error);
        yield put(actions.deleteByID.deleteByIDFailure(Error));

    }
}

function * mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
    yield takeLatest(actions.deleteByID.deleteByIDrequest, deleteByIDSaga);
}

export default mySaga;