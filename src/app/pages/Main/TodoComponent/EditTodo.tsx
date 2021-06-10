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

function EditTodo({list} : CProps) {
    const { todoStore} = useStore();

    return (
        <Container>
            <TextField 
                id={list.id}
                value={list.editTodoValue}
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