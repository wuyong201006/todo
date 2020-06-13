import React, { useState } from 'react';
import {connect} from 'react-redux'
import './app.css';

import {listAdd, listUpdate, listRemove} from './action';

function App(props) {
  const {datas, listAdd, listUpdate, listRemove} = props;
  const [value, setValue] = useState('');
  return (
    <div className="app">
      <div className="row">
        <input type="input"
        onChange={event=>setValue(event.target.value)}>
        </input>
        <button onClick={event=>listAdd({name:value})}>
          添加
        </button>
      </div>
      <div className="row">
        <ul>
          {
            datas.map((data,index)=>{
              return <li key={index}>
                <Item data={data}
                onClick={event=>listUpdate(data.id,{active:!data.active})}
                onRemove={event=>listRemove(data.id)}>
                </Item>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

function Item(props){
  const {data, onClick, onRemove} = props;
  return <div role="presentation" 
  className={`item ${data.active?'active':''}`}
  onClick={onClick}>
    <label>{data.name}</label>
    <span onClick={onRemove}>删除</span>
  </div>
}
const mapStateToProps = state =>{
  return {
    datas: state.datas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listAdd:data=>dispatch(listAdd(data)),
    listUpdate:(id, data)=>dispatch(listUpdate(id, data)),
    listRemove:id=>dispatch(listRemove(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
