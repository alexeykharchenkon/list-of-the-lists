import { TodoList } from "../TodoList";

export interface TodoProps {
    list: TodoList;
    addOrEditTodo: any;
    buttonText: string;
    todoValue: string;
    valueOnChange: any;
}