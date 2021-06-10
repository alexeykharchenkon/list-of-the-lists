import { makeAutoObservable } from "mobx";
import { ListType } from "../models/ListType";

export default class RootStore {
    lists: ListType[] = []; 

    constructor(){
        makeAutoObservable(this)
    }
}