import { observer } from 'mobx-react-lite';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from '../../../stores/rootStore';
import Container from '@material-ui/core/Container';
import { TodoList } from "../../../common/models/TodoList";
import { List, ListItem} from '@material-ui/core';
import TodoListComponent from './TodoListComponent'
import EditTodoComponent from './EditTodoComponent'
import AddTodoComponent from './AddTodoComponent'

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#cbebeb',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    listitem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  }));

interface CProps {
    list: TodoList;
}

function TodoComponent({list} : CProps) {
    const classes = useStyles();
    const { todoStore} = useStore();

    return (
        <Container className={classes.root}>
            <h2>List Todos</h2>
            {!todoStore.editMode && <AddTodoComponent list={list}/> }
            {todoStore.editMode && <EditTodoComponent list={list}/> }
            <List className={classes.list}>
                {list.todos.map(todo => {
                    return (
                        <ListItem key={todo.id} className={classes.listitem}>
                            <TodoListComponent todo={todo} listId={list.id}/>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
}

export default observer(TodoComponent);