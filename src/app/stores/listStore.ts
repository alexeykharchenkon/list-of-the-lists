import { makeAutoObservable } from "mobx";
import { TodoType } from "../models/TodoType";
import { ListType } from "../models/ListType";
import { TitleType } from "../models/TitleType";
import { Guid } from "guid-typescript";
import RootStore from "./rootStore";
import service from '../services/service'


export default class ListStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }
 
    deleteList = (listId: string) => {
        this.rootStore.lists = this.rootStore.lists.filter(list => list.id !== listId);
        service.Lists.save(this.rootStore.lists);
    }

    addList = () => {  
        let todos : TodoType[] = [];
        let titles : TitleType[] = [];
        let lists : ListType[] = [];

        let list1: ListType = {
            id: Guid.create().toString(), 
            title: titles, 
            todos: todos, 
            addTodoValue: "", 
            editMode: false, 
            editTodoId: "", 
            editTodoValue: "", 
            editTitleMode: false, 
            editTitleId: "", 
            editTitleValue: "", 
            addTitleValue: ""
        };

        lists.push(list1);
        this.rootStore.lists = lists.concat(this.rootStore.lists);

        service.Lists.save(this.rootStore.lists);
    }

    loadLists = () => {
       // this.rootStore.lists = service.Lists.list();
    }
}