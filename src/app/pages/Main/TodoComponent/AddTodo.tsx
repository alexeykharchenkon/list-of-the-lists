import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/store';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { ListType } from "../../../models/ListType";

interface CProps {
    list: ListType;
}

function AddTodo({list} : CProps) {
    const { todoStore} = useStore();

    return (
        <Container>
            <TextField 
                id={list.id} 
                label="Add Todo Here" 
                value={list.addTodoValue}
                onChange={todoStore.addTodoValueChange}
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