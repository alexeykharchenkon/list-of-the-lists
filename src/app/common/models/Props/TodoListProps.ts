import { Todo } from "../Todo";

export interface TodoListProps {
    todo: Todo;
    listId: string;
    editTodo: any;
    checkTodo: any;
    deleteTodo: any;
}