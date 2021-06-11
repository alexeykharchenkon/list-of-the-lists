import { TodoList } from "../common/models/TodoList";

const requests = {
    get: () => JSON.parse(localStorage.getItem("lists") || "[]"),
    set: (lists: TodoList[]) => localStorage.setItem("lists", JSON.stringify(lists)),
}

const listService = {
    load: () => requests.get(),
    save: (lists: TodoList[]) => requests.set(lists)
}

export default listService;