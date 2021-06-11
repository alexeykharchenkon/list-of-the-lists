import { TodoList } from "../TodoList";

export interface TodoProps {
    list: TodoList;
    todoValue: string;
    addOrEditTodo: any;
    valueOnChange: any;
    buttonText: string;
}