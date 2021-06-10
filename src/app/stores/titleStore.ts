import { makeAutoObservable } from "mobx";
import RootStore from "./rootStore";
import { Guid } from "guid-typescript";
import { TitleType } from "../models/TitleType";
import service from '../services/service'

export default class TitleStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }

    addTitle = (listId: string) => {
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                let tit: TitleType = {
                    id: Guid.create().toString(), 
                    title: list.addTitleValue
                };
                list.title.push(tit);
                list.addTitleValue = "";
            }
        });
        service.Lists.save(this.rootStore.lists);
    }

    editTitle = (id: string, listId: string) => {
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                list.editTitleMode = true;
                list.editTitleId = id;
                list.editTitleValue = list.title.filter(t => t.id === id)[0].title;
            }
        });
    }

    editTitleValueSave = (listId: string) => {
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                list.title.map(t=> {
                    if(t.id === list.editTitleId) {
                        t.title = list.editTitleValue;
                    }
                });
                list.editTitleMode = false;
            }});
        service.Lists.save(this.rootStore.lists);
    }

    editTitleValueChange = (event: any) => {
        this.rootStore.lists.map(list => {
            if (list.id === event.target.id) {
                list.editTitleValue = event.target.value;
            }
        });
    }

    deleteTitle = (id: string, listId: string) => {
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                list.title = list.title.filter(t => t.id !== id);
            }
        });
        service.Lists.save(this.rootStore.lists);
    }

    addTitleValueChange = (event: any) => {
        this.rootStore.lists.map(list => {
            if (list.id === event.target.id) {
                list.addTitleValue = event.target.value;
            }
        });
    }
}