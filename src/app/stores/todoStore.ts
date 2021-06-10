import { makeAutoObservable } from "mobx";
import { TodoType } from "../models/TodoType";
import { Guid } from "guid-typescript";
import RootStore from "./rootStore";
import service from '../services/service'


export default class TodoStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }

    checkTodo = (id: string, listId: string) => {
          
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                 let newTodo: TodoType = {id: "", title: "", done: false, checked: ""};
                 list.todos.map(todo => {
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
        
        service.Lists.save(this.rootStore.lists);
     }

    deleteTodo = (id: string, listId: string) => {
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                list.todos = list.todos.filter(todo => todo.id !== id);
            }
        });
        service.Lists.save(this.rootStore.lists);
    }

    addTodo = (listId: string) => {
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                let newTodo: TodoType = {id: Guid.create().toString(), title: list.addTodoValue, done: false, checked: ""};
                list.todos.push(newTodo);
                list.addTodoValue = "";
            }
        });
        service.Lists.save(this.rootStore.lists);
    }

    addTodoValueChange = (event: any) => {
        this.rootStore.lists.map(list => {
            if (list.id === event.target.id) {
                list.addTodoValue = event.target.value;
            }
        });
    }

    editTodo = (id: string, listId: string) => {
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                list.editMode = true;
                list.editTodoId = id;
                list.editTodoValue = list.todos.filter(todo => todo.id === id)[0].title;
            }
        });
    }

    editTodoValueSave = (listId: string) => {
        this.rootStore.lists.map(list => {
            if (list.id === listId) {
                list.todos.map(todo => 
                    {
                        if(todo.id === list.editTodoId) {
                            todo.title = list.editTodoValue;
                        }
                    });
                list.editMode = false;
            }});
            service.Lists.save(this.rootStore.lists);
    }

    editTodoValueChange = (event: any) => {
        this.rootStore.lists.map(list => {
            if (list.id === event.target.id) {
                list.editTodoValue = event.target.value;
            }
        });
    }
}