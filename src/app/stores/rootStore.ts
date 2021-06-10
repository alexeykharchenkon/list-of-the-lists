import { createContext, useContext } from "react";
import TodoStore from "./todoStore";
import TitleStore from "./titleStore";
import ListStore from "./listStore";

interface RootStore {
    listStore: ListStore
    todoStore: TodoStore
    titleStore: TitleStore
}

const listStore = new ListStore();

export const rootStore: RootStore = {
    listStore,
    todoStore: new TodoStore(listStore),
    titleStore: new TitleStore(listStore),
}

export const StoreContext = createContext(rootStore)

export function useStore() {
    return useContext(StoreContext);
}