import { ListType } from "../models/ListType";

const requests = {
    get: () => JSON.parse(localStorage.getItem("lists") || "[]"),
    set: (lists: ListType[]) => localStorage.setItem("lists", JSON.stringify(lists)),
}

const Lists = {
    list: () => requests.get(),
    save: (lists: ListType[]) => requests.set(lists)
}

const service = {
    Lists
}

export default service;