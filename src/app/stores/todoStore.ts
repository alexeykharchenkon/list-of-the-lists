import { makeAutoObservable } from "mobx";
import { TodoType } from "../models/TodoType";
import { ListType } from "../models/ListType";
import { TitleType } from "../models/TitleType";
import { Guid } from "guid-typescript";

export default class TodoStore {
    lists: ListType[] = []; 

    constructor(){
        makeAutoObservable(this)
    }

    loadTodos = () => {

     //   this.lists = JSON.parse(localStorage.getItem("lists") || "[]");
     /*   if(this.lists.length === 0) { 

            let todo1: TodoType = {id: Guid.create().toString(), title: '1a', done: false, checked: ""};
            let todo2: TodoType = {id: Guid.create().toString(), title: '2a', done: true, checked: "done"};
            let todo3: TodoType = {id: Guid.create().toString(), title: '3a', done: false, checked: ""};
            
            let todos1 : TodoType[] = [];
            let todos2 : TodoType[] = [];

            todos1.push(todo1);
            todos1.push(todo2);
            todos2.push(todo3);

            let titl1: TitleType = {id: Guid.create().toString(), title: 'List number 1'}
            let titl2: TitleType = {id: Guid.create().toString(), title: 'List number 2'}
            let titl3: TitleType = {id: Guid.create().toString(), title: 'First List'}

            let titles1 : TitleType[] = [];
            let titles2 : TitleType[] = [];

            titles1.push(titl1);
            titles1.push(titl3);
            titles2.push(titl2);

            let list1: ListType = {id: Guid.create().toString(), title: titles1, todos: todos1, addTodoValue: "sdsdf", editMode: false, editTodoId: "", editTodoValue: "", editTitleMode: false, editTitleId: "", editTitleValue: "", addTitleValue: ""};
            let list2: ListType = {id: Guid.create().toString(), title: titles2, todos: todos2, addTodoValue: "", editMode: false, editTodoId: "", editTodoValue: "", editTitleMode: false, editTitleId: "", editTitleValue: "", addTitleValue: ""};
            this.lists.push(list1);
            this.lists.push(list2);
        }*/
    }

    checkTodo = (id: string, listId: string) => {
       
       this.lists.map(list => {
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
       
       localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    deleteTodo = (id: string, listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                list.todos = list.todos.filter(todo => todo.id !== id);
            }
        });
        localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    addTodo = (listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                let newTodo: TodoType = {id: Guid.create().toString(), title: list.addTodoValue, done: false, checked: ""};
                list.todos.push(newTodo);
                list.addTodoValue = "";
            }
        });

        localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    addTodoValueChange = (event: any) => {
        this.lists.map(list => {
            if (list.id === event.target.id) {
                list.addTodoValue = event.target.value;
            }
        });
    }

    editTodo = (id: string, listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                list.editMode = true;
                list.editTodoId = id;
                list.editTodoValue = list.todos.filter(todo => todo.id === id)[0].title;
            }
        });
    }

    editTodoValueSave = (listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                list.todos.map(todo => {if(todo.id === list.editTodoId)todo.title = list.editTodoValue;});
                list.editMode = false;
            }});
         localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    editTodoValueChange = (event: any) => {
        this.lists.map(list => {
            if (list.id === event.target.id) {
                list.editTodoValue = event.target.value;
            }
        });
    }

    deleteList = (listId: string) => {
        this.lists = this.lists.filter(list => list.id !== listId);
        localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    editTitle = (id: string, listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                list.editTitleMode = true;
                list.editTitleId = id;
                list.editTitleValue = list.title.filter(t => t.id === id)[0].title;
            }
        });
    }

    editTitleValueSave = (listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                list.title.map(t=> {if(t.id === list.editTitleId)t.title = list.editTitleValue;});
                list.editTitleMode = false;
            }});
            localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    editTitleValueChange = (event: any) => {
        this.lists.map(list => {
            if (list.id === event.target.id) {
                list.editTitleValue = event.target.value;
            }
        });
    }

    addTitle = (listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                let tit: TitleType = {id: Guid.create().toString(), title: list.addTitleValue};
                list.title.push(tit);
                list.addTitleValue = "";
            }
        });
        localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    deleteTitle = (id: string, listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                list.title = list.title.filter(t => t.id !== id);
            }
        });
        localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    addTitleValueChange = (event: any) => {
        this.lists.map(list => {
            if (list.id === event.target.id) {
                list.addTitleValue = event.target.value;
            }
        });
    }

    addList = () => {  
        let todos1 : TodoType[] = [];
        let titles1 : TitleType[] = [];

        let list1: ListType = {
            id: Guid.create().toString(), 
            title: titles1, 
            todos: todos1, 
            addTodoValue: "", 
            editMode: false, 
            editTodoId: "", 
            editTodoValue: "", 
            editTitleMode: false, 
            editTitleId: "", 
            editTitleValue: "", 
            addTitleValue: ""
        };
       
        this.lists.push(list1);

        localStorage.setItem("lists", JSON.stringify(this.lists));
    }

   
}