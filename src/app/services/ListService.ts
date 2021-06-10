import { TodoList } from "../common/models/TodoList";

const requests = {
    get: () => JSON.parse(localStorage.getItem("lists") || "[]"),
    set: (lists: TodoList[]) => localStorage.setItem("lists", JSON.stringify(lists)),
}

const AllLists = {
    list: () => requests.get(),
    save: (lists: TodoList[]) => requests.set(lists)
}

const listService = {
    AllLists
}

export default listService;