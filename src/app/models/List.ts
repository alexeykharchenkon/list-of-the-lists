import { Todo } from "./Todo";
import { Title } from "./Title";

export interface List {
    id: string;
    title: Title[];
    todos: Todo[];
    addTodoValue: string;
    editMode: boolean;
    editTodoId: string;
    editTodoValue: string;
    editTitleMode: boolean;
    editTitleId: string;
    editTitleValue: string;
    addTitleValue: string;
}