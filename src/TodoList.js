import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    // initListAction,
    // getTodoList
    getInitList
} from './store/actionCreators';
// import axios from 'axios'
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        );
    }
    componentDidMount() {
        // axios.get('').then(res=>{})
        // setTimeout(()=>{
        //     const data = [1,2,3]
        //     const action= initListAction(data)
        //     store.dispatch(action)
        // },1000)

        // 使用redux-thunk中间件获取ajax异步请求
        // const action = getTodoList()
        // store.dispatch(action)

        // redux-saga也是解决异步请求
        const action = getInitList();
        store.dispatch(action);
    }
    handleInputChange = e => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    };
    handleStoreChange = () => {
        this.setState(store.getState());
    };
    handleBtnClick = () => {
        const action = getAddItemAction();
        store.dispatch(action);
    };
    handleItemDelete = index => {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    };
}
export default TodoList;
