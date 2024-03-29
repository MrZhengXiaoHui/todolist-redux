import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes';
// import axios from 'axios'

export const getInputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = index => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = data => ({
    type: INIT_LIST_ACTION,
    data
});

// 使用redux-thunk中间件获取ajax异步请求
// 使用redux-thunk 可以返回一个函数
// export const getTodoList = () => {
//     return dispatch => {
//         // axios.get('').then(res=>{})
//         setTimeout(() => {
//             const data = [1, 2, 3];
//             const action = initListAction(data);
//             dispatch(action);
//         }, 1000);
//     };
// };

export const getInitList = () => ({
    type: GET_INIT_LIST
});
