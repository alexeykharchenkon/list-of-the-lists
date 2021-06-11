import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/rootStore';
import Container from '@material-ui/core/Container';
import { TodoList } from "../../../common/models/TodoList";
import { List, ListItem} from '@material-ui/core';
import TodoListComponent from './TodoListComponent'
import AddEditTodoComponent from './AddEditTodoComponent'
import { useStyles } from "../../../common/styles/styles"

interface CProps {
    list: TodoList;
}

function TodoComponent({list} : CProps) {
    const classes = useStyles();
    const { todoStore} = useStore();

    return (
        <Container className={classes.todoCo}>
            <h2>List Todos</h2>
            {!todoStore.editMode && <AddEditTodoComponent 
                list={list} 
                todoValue={todoStore.todoValue}
                addOrEditTodo={todoStore.addTodo} 
                valueOnChange={todoStore.valueOnChange}
                buttonText={"Add"}
            /> }
            {todoStore.editMode && <AddEditTodoComponent 
                list={list} 
                todoValue={todoStore.todoValue}
                addOrEditTodo={todoStore.saveEditedTodo} 
                valueOnChange={todoStore.valueOnChange}
                buttonText={"Save"}
            /> }
            <List className={classes.todoCoList}>
                {list.todos.map(todo => {
                    return (
                        <ListItem key={todo.id} className={classes.todoCoListItem}>
                            <TodoListComponent 
                                todo={todo} 
                                listId={list.id}
                                editTodo={todoStore.editTodoModeOn}
                                deleteTodo={todoStore.deleteTodo}
                                checkTodo={todoStore.checkTodo}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
}

export default observer(TodoComponent);