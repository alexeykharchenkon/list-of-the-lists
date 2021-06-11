import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/rootStore';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { TodoList } from "../../../common/models/TodoList";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
  }));

  interface CProps {
    list: TodoList;
}

function EditTodo({list} : CProps) {
    const { todoStore} = useStore();
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <TextField 
                id={list.id}
                value={todoStore.todoValue}
                onChange={todoStore.ValueChangeHandler}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => todoStore.editTodoValueSave(list.id)}
            > Save </Button>      
        </Container>
    );
}

export default observer(EditTodo);