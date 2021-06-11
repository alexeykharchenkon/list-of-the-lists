import { TodoList } from "../TodoList";

export interface TitleProps {
    list: TodoList;
    titleValue: string;
    addTitle: any;
    valueOnChange: any;
}