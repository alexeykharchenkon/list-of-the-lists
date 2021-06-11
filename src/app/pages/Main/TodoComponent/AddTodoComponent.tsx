import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/rootStore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TodoList } from "../../../common/models/TodoList";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
  }));

interface CProps {
    list: TodoList;
}

function AddTodo({list} : CProps) {
    const { todoStore} = useStore();
    const classes = useStyles();

    return (
        <Container  className={classes.root}>
            <TextField 
                id={list.id} 
                label="Add Todo Here" 
                value={todoStore.todoValue}
                onChange={todoStore.ValueChangeHandler}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => todoStore.addTodo(list.id)}
            > Add </Button>      
        </Container>
    );
}

export default observer(AddTodo);