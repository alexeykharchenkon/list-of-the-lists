import { makeAutoObservable } from "mobx";
import { Todo } from "../models/Todo";
import { List } from "../models/List";
import { Title } from "../models/Title";

export default class TodoStore {
    lists: List[] = []; 

    constructor(){
        makeAutoObservable(this)
    }

    loadTodos = () => {

        let todo1: Todo = {id: '1', title: '1a', done: false, checked: ""};
        let todo2: Todo = {id: '2', title: '2a', done: true, checked: "done"};
        let todo3: Todo = {id: '3', title: '3a', done: false, checked: ""};
        
        let todos1 : Todo[] = [];
        let todos2 : Todo[] = [];

        todos1.push(todo1);
        todos1.push(todo2);
        todos2.push(todo3);

        let titl1: Title = {id: '1', title: 'List number 1'}
        let titl2: Title = {id: '2', title: 'List number 2'}
        let titl3: Title = {id: '3', title: 'First List'}

        let titles1 : Title[] = [];
        let titles2 : Title[] = [];

        titles1.push(titl1);
        titles1.push(titl3);
        titles2.push(titl2);

        let list1: List = {id: '1', title: titles1, todos: todos1, addTodoValue: "sdsdf", editMode: false, editTodoId: "", editTodoValue: "", editTitleMode: false, editTitleId: "", editTitleValue: "", addTitleValue: ""};
        let list2: List = {id: '2', title: titles2, todos: todos2, addTodoValue: "", editMode: false, editTodoId: "", editTodoValue: "", editTitleMode: false, editTitleId: "", editTitleValue: "", addTitleValue: ""};
        this.lists.push(list1);
        this.lists.push(list2);
    }

    checkTodo = (id: string, listId: string) => {
       
       this.lists.map(list => {
           if (list.id === listId) {
                let newTodo: Todo = {id: "", title: "", done: false, checked: ""};
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
    }

    deleteTodo = (id: string, listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                list.todos = list.todos.filter(todo => todo.id !== id);
            }
        });
    }

    addTodo = (listId: string) => {
        this.lists.map(list => {
            if (list.id === listId) {
                let newTodo: Todo = {id: (list.todos.length + 1).toString(), title: list.addTodoValue, done: false, checked: ""};
                list.todos.push(newTodo);
                list.addTodoValue = "";
            }
        });
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
                list.editMode = false;
            }});
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
                let tit: Title = {id: (list.title.length + 1).toString(), title: list.addTitleValue};
                list.title.push(tit);
                list.addTitleValue = "";
            }
        });
    }

    addTitleValueChange = (event: any) => {
        this.lists.map(list => {
            if (list.id === event.target.id) {
                list.addTitleValue = event.target.value;
            }
        });
    }

   
}