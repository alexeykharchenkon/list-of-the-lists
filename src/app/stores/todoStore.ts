import { makeAutoObservable } from "mobx";
import { Guid } from "guid-typescript";
import ListStore from "./listStore";
import listService from '../services/ListService'

export default class TodoStore {
    listStore: ListStore;

    todoValue: string = "";
    editMode = false;
    todoId: string = "";
    
    constructor(listStore: ListStore){
        this.listStore = listStore;
        makeAutoObservable(this)
    }

    checkTodo = (id: string, listId: string) => {      
        this.listStore.lists.filter(list => list.id === listId)
        .forEach(list=> { 
            list.todos.filter(todo => todo.id === id)
            .forEach((todo, index) => {
                 todo.done = !todo.done;
                 todo.checked = todo.done ? "done": "";
                 if(todo.done)list.todos.push(...list.todos.splice(index,1));
            });
        })

        listService.save(this.listStore.lists);
     }

    deleteTodo = (id: string, listId: string) => {
        this.listStore.lists.filter(list => list.id === listId)
        .forEach(list=> { list.todos = list.todos.filter(todo => todo.id !== id);})

        listService.save(this.listStore.lists);
    }

    addTodo = (listId: string) => {  
        this.listStore.lists.filter(list => list.id === listId)
        .forEach(list=> { 
            list.todos.push({
                id: Guid.create().toString(), 
                title: this.todoValue, 
                done: false, 
                checked: "",
            });
        })
        this.todoValue = "";
        
        listService.save(this.listStore.lists);
    } 

    editTodoModeOn = (id: string, listId: string, title: string) => {
        this.todoValue = title;
        this.todoId = id;
        this.editMode = true;
    }

    saveEditedTodo = (listId: string) => {
        this.listStore.lists.filter(list => list.id === listId)
        .forEach(list=> { 
            list.todos.filter(todo => todo.id === this.todoId)
             .forEach (todo => { todo.title = this.todoValue; });
        });
        this.todoValue = "";
        this.editMode = false;

        listService.save(this.listStore.lists);
    }

    valueOnChange = (value: string) => {
        this.todoValue = value;
    }
}