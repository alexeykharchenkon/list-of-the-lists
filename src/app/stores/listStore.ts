import { makeAutoObservable } from "mobx";
import { Todo} from "../common/models/Todo";
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
        listService.AllLists.save(this.lists);
    }

    addList = () => {  
        this.titleCreateMode = true;

        let todos : Todo[] = [];
        let lists : TodoList[] = [];

        let list1: TodoList = {
            id: Guid.create().toString(), 
            title: "", 
            todos: todos, 
        };

        lists.push(list1);
        this.lists = lists.concat(this.lists);
        listService.AllLists.save(this.lists);
    }

    loadLists = () => {
       // this.rootStore.lists = service.Lists.list();
    }
}