import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../stores/store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

function TodoList() {
    const {todoStore} = useStore();
    const { editMode } = todoStore;

    return (
        <Container maxWidth="sm">
                        <h2>Заголовок</h2>
                        <AddTodo/>
                        {editMode && <EditTodo/>}
                        <List>
                        {todoStore.todos.map(todo => {
                            return (
                            <ListItem key={todo.id}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{marginRight: '10px'}}
                                    onClick={() => todoStore.editTodo(todo.id)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{marginRight: '10px'}}
                                    onClick={() => todoStore.deleteTodo(todo.id)}
                                >
                                    Delete
                                </Button>
                                <ListItemText id={todo.id} primary={todo.title}/>
                                <Checkbox
                                    checked={todo.done}
                                    tabIndex={-1}
                                    disableRipple
                                    onChange={() => todoStore.checkTodo(todo.id)}
                                />
                            </ListItem>
                            );
                        })}
                        </List>
        </Container>
      );
}

export default observer(TodoList);

