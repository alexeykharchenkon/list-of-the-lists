import { createContext, useContext } from "react";
import TodoStore from "./todoStore";
import TitleStore from "./titleStore";
import RootStore from "./rootStore";
import ListStore from "./listStore";

interface Store {
    rootStore: RootStore
    todoStore: TodoStore
    titleStore: TitleStore
    listStore: ListStore
}

const rootStore = new RootStore();

export const store: Store = {
    rootStore,
    todoStore: new TodoStore(rootStore),
    titleStore: new TitleStore(rootStore),
    listStore: new ListStore(rootStore),
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext);
}