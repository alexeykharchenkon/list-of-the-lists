import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../stores/store';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

function EditTodo() {
    const {todoStore} = useStore();

    return (
        <Container maxWidth="sm">
            <TextField 
                id="newTodoField" 
                label="Add Todo Here" 
                value={todoStore.editTodoValue}
                onChange={todoStore.editTodoValueChange}
            />
             <Button
                variant="contained"
                color="primary"
                style={{marginRight: '10px'}}
                onClick={() => todoStore.editTodoValueSave()}
              >
                Save
             </Button>      
         </Container>
      );

}

export default observer(EditTodo);