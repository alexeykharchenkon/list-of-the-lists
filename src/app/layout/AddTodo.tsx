import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../stores/store';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

function AddTodo() {
    const {todoStore} = useStore();

    return (
        <Container maxWidth="sm">
            <TextField 
                id="newTodoField" 
                label="Add Todo Here" 
                value={todoStore.addTodoValue}
                onChange={todoStore.addTodoValueChange}
            />
             <Button
                variant="contained"
                color="primary"
                style={{marginRight: '10px'}}
                onClick={() => todoStore.addTodo()}
              >
                Add
             </Button>      
         </Container>
      );

}

export default observer(AddTodo);

