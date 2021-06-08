import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../stores/store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import './styles.css';

function TodoList() {
    const { todoStore} = useStore();

    return (
        <Container maxWidth="sm">
                <ul>
                    {todoStore.lists.map(list => {
                    return (
                        <li key={list.id} className="list">
                            <Button
                                    color="secondary"
                                    style={{marginBottom: '20px'}}
                                    onClick={() => todoStore.deleteList(list.id)}
                                >
                                    Delete List
                                </Button>
                         <TextField 
                            id={list.id} 
                            label="Add Title" 
                            value={list.addTitleValue}
                            onChange={todoStore.addTitleValueChange}
                        />
                        <Button
                            color="primary"
                            onClick={() => todoStore.addTitle(list.id)}
                        >
                            Add
                        </Button>  
                        <div style={{marginBottom: '15px'}}>   
                        {list.editTitleMode && (
                                        <Container maxWidth="sm">
                                            <TextField 
                                                id={list.id}
                                                value={list.editTitleValue}
                                                onChange={todoStore.editTitleValueChange}
                                            />
                                            <Button
                                                color="primary"
                                                onClick={() => todoStore.editTitleValueSave(list.id)}
                                            >
                                        Save
                                     </Button>      
                                 </Container>
                              )}
                        
                        <ul>
                        {list.title.map(tit => {
                            return(
                                <li key={tit.id}>
                                    <strong>{tit.title}</strong>
                                    <Button
                                    color="primary"
                                    style={{marginLeft: '10px'}}
                                    onClick={() => todoStore.editTitle(tit.id, list.id)}
                                >
                                    Edit
                                </Button>
                                </li>
                            )      
                        })}
                        </ul>
                        </div>
                        <h2>Todos</h2>
                        <Container maxWidth="sm">
                        <TextField 
                            id={list.id} 
                            label="Add Todo Here" 
                            value={list.addTodoValue}
                            onChange={todoStore.addTodoValueChange}
                        />
                        <Button
                            color="primary"
                            onClick={() => todoStore.addTodo(list.id)}
                        >
                            Add
                        </Button>      
                    </Container>
                        {list.editMode && (
                                <Container maxWidth="sm">
                                    <TextField 
                                        id={list.id}
                                        value={list.editTodoValue}
                                        onChange={todoStore.editTodoValueChange}
                                    />
                                     <Button
                                        color="primary"
                                        onClick={() => todoStore.editTodoValueSave(list.id)}
                                      >
                                        Save
                                     </Button>      
                                 </Container>
                              )}
                        <List style={{marginBottom: '50px'}}>
                        {list.todos.map(todo => {
                            return (
                            <ListItem key={todo.id}>
                                <Button
                                    color="primary"
                                    style={{marginRight: '10px'}}
                                    onClick={() => todoStore.editTodo(todo.id, list.id)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    color="secondary"
                                    style={{marginRight: '10px'}}
                                    onClick={() => todoStore.deleteTodo(todo.id, list.id)}
                                >
                                    Delete
                                </Button>
                                <ListItemText 
                                id={todo.id} 
                                primary={todo.title}
                                className={todo.checked}
                                />
                                <Checkbox
                                    checked={todo.done}
                                    disableRipple
                                    onChange={() => todoStore.checkTodo(todo.id, list.id)}
                                />
                            </ListItem>
                            );
                        })}
                        </List>
                            </li>
                        );
                    })}
                        </ul>
        </Container>
      );
}

export default observer(TodoList);

