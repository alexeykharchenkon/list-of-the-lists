import { Todo } from "./Todo";

export interface List {
    id: string;
    title: string;
    todos: Todo[];
}