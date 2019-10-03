// import React, { Component } from 'react';
import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件 --- 就是一个函数。  当普通组件只有render函数时就可以创建
// 无状态组件性能比普通组件好，因为普通组件要执行生命周期函数
const TodoListUI = props => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder="todo info"
                    style={{ width: '300px' }}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>
                    提交
                </Button>
            </div>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => props.handleItemDelete(index)}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    );
};
// 普通组件
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//                 <div>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder="todo info"
//                         style={{ width: '300px' }}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>
//                         提交
//                     </Button>
//                 </div>
//                 <List
//                     style={{ marginTop: '10px', width: '300px' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item
//                             onClick={index =>
//                                 this.props.handleItemDelete(index)
//                             }
//                         >
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         );
//     }
// }
export default TodoListUI;
