import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
// import axios from 'axios'

function* getInitList() {
    try {
        // 写法
        // const res = yield axios.get('')
        // const action = initListAction(res.data);
        // yield put(action);

        // axios.get('').then(res=>{})
        const data = yield [1, 2, 3];
        const action = initListAction(data);
        yield put(action);
    } catch (e) {
        console.log('错误')
    }
}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
