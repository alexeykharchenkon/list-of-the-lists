import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/rootStore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { TodoList } from "../../../common/models/TodoList";

interface CProps {
    list: TodoList;
}

function EditTodo({list} : CProps) {
    const { todoStore} = useStore();

    return (
        <Container>
            <TextField 
                id={list.id}
                value={todoStore.editTodoValue}
                onChange={todoStore.editTodoValueChange}
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