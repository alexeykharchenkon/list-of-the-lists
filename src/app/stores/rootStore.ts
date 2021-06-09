import { createContext, useContext } from "react";
import TodoStore from "./todoStore";

interface RootStore {
    todoStore: TodoStore
}

export const rootStore: RootStore = {
    todoStore: new TodoStore()
}

export const StoreContext = createContext(rootStore)

export function useStore() {
    return useContext(StoreContext);
}