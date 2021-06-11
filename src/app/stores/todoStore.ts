import { makeAutoObservable } from "mobx";
import { Todo } from "../common/models/Todo";
import { Guid } from "guid-typescript";
import ListStore from "./listStore";
import listService from '../services/ListService'

export default class TodoStore {
    listStore: ListStore;

    todoValue = "";
    editMode = false;
    todoId = "";
    
    constructor(listStore: ListStore){
        this.listStore = listStore;
        makeAutoObservable(this)
    }

    checkTodo = (id: string, listId: string) => {       
        this.listStore.lists.forEach(list => {
            if (list.id === listId) {
                 let newTodo: Todo = {id: "", title: "", done: false, checked: ""};
                 list.todos.forEach(todo => {
                     if(todo.id === id){
                         newTodo.done = todo.done = !todo.done;
                         newTodo.checked = todo.checked = todo.done ? "done": "";
                         newTodo.title = todo.title;
                         newTodo.id = todo.id;
                     }
                 });
                 if(newTodo.done){
                     list.todos = list.todos.filter(todo => todo.id !== id);
                     list.todos.push(newTodo);
                 }
            }
        })    
        
        listService.AllLists.save(this.listStore.lists);
     }

    deleteTodo = (id: string, listId: string) => {
        this.listStore.lists.forEach(list => {
            if (list.id === listId) {
                list.todos = list.todos.filter(todo => todo.id !== id);
            }
        });
        listService.AllLists.save(this.listStore.lists);
    }

    addTodo = (listId: string) => {  

        this.listStore.lists.forEach(list => {
            if (list.id === listId) {
                list.todos.push({
                    id: Guid.create().toString(), 
                    title: this.todoValue, 
                    done: false, 
                    checked: ""
                });
                this.todoValue = "";
            }
        });
        listService.AllLists.save(this.listStore.lists);
    } 

    editTodo = (id: string, listId: string) => {
        this.listStore.lists.forEach(list => {
            if (list.id === listId) {
                this.todoId = id;
                this.todoValue = list.todos.filter(todo => todo.id === id)[0].title;
                this.editMode = true;
            }
        });
    }

    editTodoValueSave = (listId: string) => {
        this.listStore.lists.forEach(list => {
        if (list.id === listId) {
            list.todos.forEach(todo => 
             {
                 if(todo.id === this.todoId) {
                    todo.title = this.todoValue;
                    this.editMode = false;
                }
            });
        }});
        listService.AllLists.save(this.listStore.lists);
    }

    ValueChangeHandler = (event: any) => {
        this.listStore.lists.forEach(list => {
            if (list.id === event.target.id) {
                this.todoValue = event.target.value;
            }
        });
    }
}