import { Todo } from "./Todo";

export interface TodoList {
    id: string;
    title: string;
    todos: Todo[];
}