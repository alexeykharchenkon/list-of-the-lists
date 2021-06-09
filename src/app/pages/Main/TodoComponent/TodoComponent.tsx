import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/rootStore';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ListType } from "../../../models/ListType";
import { List, ListItem} from '@material-ui/core';
import TodoList from './TodoList'
import EditTodo from './EditTodo'
import AddTodo from './AddTodo'

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
    list: ListType;
}

function TodoComponent({list} : CProps) {
    const classes = useStyles();
    const { todoStore } = useStore();

    return (
        <Container className={classes.root}>
            <h2>List Todos</h2>
            <AddTodo list={list}/>
            {list.editMode && <EditTodo list={list}/>}
            <List className={classes.list}>
                {list.todos.map(todo => {
                    return (
                        <ListItem key={todo.id} className={classes.listitem}>
                            <TodoList todo={todo} listId={list.id}/>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
}

export default observer(TodoComponent);