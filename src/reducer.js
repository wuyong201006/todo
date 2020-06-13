import {
    LIST_ADD,
    LIST_UPDATE,
    LIST_REMOVE
} from './types'
const initial = {
    datas: [
        // {id:1, name:'test'},
    ]
}
export default function state(state=initial, action){
    switch(action.type){
        case LIST_ADD:
            return listAdd(state, action.data);
        case LIST_UPDATE:
            return listUpdate(state, action.id, action.data);
        case LIST_REMOVE:
            return listRemove(state, action.id);
        default:
            return state;
    }
}

function listAdd(state, data){
    const datas = state.datas.slice(0);
    const item = {
        id: Date.now().toString().slice(-6),
        ...data
    }
    datas.push(item)
    return {...state, datas};
}

function listUpdate(state, id, data){
    const datas = state.datas.slice(0);
    const index = datas.findIndex(data=>data.id===id);
    if(index>-1 && index < datas.length){
        datas[index] = {...datas[index], ...data}
    }
    return {...state, datas};
}

function listRemove(state, id){
    const datas = state.datas.slice(0);
    const index = datas.findIndex(data=>data.id===id);
    if(index>-1 && index < datas.length){
        datas.splice(index, 1);
    }

    return {...state, datas};
}