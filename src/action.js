import {
    LIST_ADD,
    LIST_UPDATE,
    LIST_REMOVE
} from './types'

export function listAdd(data){
    return {
        type: LIST_ADD,
        data
    }
}
export function listUpdate(id, data){
    return {
        type: LIST_UPDATE,
        id,
        data
    }
}
export function listRemove(id){
    return {
        type: LIST_REMOVE,
        id
    }
}