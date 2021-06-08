import { makeAutoObservable } from "mobx";
import { Todo } from "../models/Todo";
import { List } from "../models/List";

export default class TodoStore {
    lists: List[] = []; 
    todos: Todo[] = [];
    addTodoValue: string = "";
    editMode: boolean = false;
    editTodoId: string = "";
    editTodoValue: string = "";

    constructor(){
        makeAutoObservable(this)
    }

    loadTodos = () => {
        let todo1: Todo = {id: '1', title: '1a', done: false};
        let todo2: Todo = {id: '2', title: '2a', done: true};
        let todo3: Todo = {id: '3', title: '3a', done: false};
        this.todos.push(todo1);
        this.todos.push(todo2);
        this.todos.push(todo3);

        let list1: List = {id: '1', title: 'List number 1', todos: this.todos};
        let list2: List = {id: '2', title: 'List number 2', todos: this.todos};
        this.lists.push(list1);
        this.lists.push(list2);
    }

    checkTodo = (id: string) => {
        this.todos.map(todo => {if(todo.id === id)todo.done = !todo.done;});
    }

    deleteTodo = (id: string) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    addTodo = () => {
        let newTodo: Todo = {id: (this.todos.length + 1).toString(), title: this.addTodoValue, done: false};
        this.todos.push(newTodo);
        console.log(this.todos.length.toString());
    }

    editTodo = (id: string) => {
        this.editTodoId = id;
        this.editMode = true;
        this.editTodoValue = this.todos.filter(todo => todo.id === id)[0].title;
    }

    editTodoValueSave = () => {
        this.todos.map(todo => {if(todo.id === this.editTodoId)todo.title = this.editTodoValue;});
        this.editMode = false;
    }

    addTodoValueChange = (event: any) => {
        this.addTodoValue = event.target.value;
    }
    editTodoValueChange = (event: any) => {
        this.editTodoValue = event.target.value;
    }

   
}