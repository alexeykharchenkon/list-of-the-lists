import { makeAutoObservable } from "mobx";
import listService from '../services/ListService'
import ListStore from "./listStore";

export default class TitleStore {
    listStore: ListStore;
    titleValue = "";

    constructor(listStore: ListStore){
        this.listStore = listStore;
        makeAutoObservable(this)
    }

    addTitle = (listId: string) => {
        this.listStore.lists.forEach(list => {
            if (list.id === listId) {
                list.title = this.titleValue;
                this.listStore.titleCreateMode = false;
            }
        });
        this.listStore.titleCreateMode = false;
        this.titleValue = "";

        listService.AllLists.save(this.listStore.lists);
    }

    ValueChangeHandler = (event: any) => {
        this.listStore.lists.forEach(list => {
            if (list.id === event.target.id) {
                this.titleValue = event.target.value;
            }
        });
    }
}