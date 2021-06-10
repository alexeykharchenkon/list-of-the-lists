import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/rootStore';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Todo } from "../../../common/models/Todo";
import { makeStyles } from '@material-ui/core/styles';
import '../../../styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
    },
    title: {
        display: 'flex',
    },
  }));

interface CProps {
    todo: Todo;
    listId: string;
}

function TodoComponent({todo, listId} : CProps) {
    const classes = useStyles();
    const { todoStore} = useStore();

    return (
        <Container className={classes.root}>
              <ListItemText 
                    id={todo.id} 
                    primary={todo.title}
                    className={todo.checked}
                />
                <Button
                    color="primary"
                    style={{marginRight: '10px'}}
                    onClick={() => todoStore.editTodo(todo.id, listId)}
                > Edit </Button>
                <Button
                    color="secondary"
                    style={{marginRight: '10px'}}
                    onClick={() => todoStore.deleteTodo(todo.id, listId)}
                 > Delete </Button>
                <Checkbox
                    checked={todo.done}
                    disableRipple
                    onChange={() => todoStore.checkTodo(todo.id, listId)}
                />
        </Container>
    );
}

export default observer(TodoComponent);