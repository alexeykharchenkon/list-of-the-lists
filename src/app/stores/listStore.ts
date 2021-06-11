import { makeAutoObservable } from "mobx";
import { TodoList } from "../common/models/TodoList";
import { Guid } from "guid-typescript";
import listService from '../services/ListService'

export default class ListStore {
    lists: TodoList[] = []; 
    titleCreateMode = true;

    constructor(){
        makeAutoObservable(this)
    }
 
    deleteList = (listId: string) => {
        this.lists = this.lists.filter(list => list.id !== listId);
        listService.save(this.lists);
    }

    addList = () => {  
        this.titleCreateMode = true;
        this.lists.unshift({
            id: Guid.create().toString(), 
            title: "", 
            todos: [], });
        listService.save(this.lists);
    }

    loadLists = () => {
       // this.rootStore.lists = service.load();
    }
}