import { TodoType } from "./TodoType";
import { TitleType } from "./TitleType";

export interface ListType {
    id: string;
    title: TitleType[];
    todos: TodoType[];
    addTodoValue: string;
    editMode: boolean;
    editTodoId: string;
    editTodoValue: string;
    editTitleMode: boolean;
    editTitleId: string;
    editTitleValue: string;
    addTitleValue: string;
}