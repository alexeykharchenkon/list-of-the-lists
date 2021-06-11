import { observer } from 'mobx-react-lite';
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useStyles } from "../../../common/styles/styles"
import { TodoListProps } from "../../../common/models/Props/TodoListProps";
import '../../../styles.css'

function TodoComponent({todo, listId, editTodo, checkTodo, deleteTodo} : TodoListProps) {
    const classes = useStyles();

    return (
        <Container className={classes.todoListCo}>
              <ListItemText 
                    primary={todo.title}
                    className={todo.checked}
                />
                <Button
                    color="primary"
                    style={{marginRight: '10px'}}
                    onClick={() => editTodo(todo.id, listId, todo.title)}
                > Edit </Button>
                <Button
                    color="secondary"
                    style={{marginRight: '10px'}}
                    onClick={() => deleteTodo(todo.id, listId)}
                 > Delete </Button>
                <Checkbox
                    checked={todo.done}
                    disableRipple
                    onChange={() => checkTodo(todo.id, listId)}
                />
        </Container>
    );
}

export default observer(TodoComponent);