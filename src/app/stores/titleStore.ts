import { makeAutoObservable } from "mobx";
import listService from '../services/ListService'
import ListStore from "./listStore";

export default class TitleStore {
    listStore: ListStore;

    titleValue: string = "";

    constructor(listStore: ListStore){
        this.listStore = listStore;
        makeAutoObservable(this)
    }

    addTitle = (listId: string) => {
        this.listStore.lists.filter(list => list.id === listId)[0].title = this.titleValue;
        this.listStore.titleCreateMode = false;
        this.titleValue = "";
        listService.save(this.listStore.lists);
    }

    valueOnChange = (value: string) => {
        this.titleValue = value;
    }
}