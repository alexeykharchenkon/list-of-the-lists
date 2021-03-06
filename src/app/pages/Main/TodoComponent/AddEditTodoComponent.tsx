import { observer } from 'mobx-react-lite';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { TodoProps } from "../../../common/models/Props/TodoProps";
import { useStyles } from "../../../common/styles/styles"


function AddTodo({list, todoValue, addOrEditTodo, valueOnChange, buttonText} : TodoProps) {
    const classes = useStyles();

    return (
        <Container  className={classes.addEditCo}>
            <TextField 
                label="Add Todo Title" 
                value={todoValue}
                onChange={e => valueOnChange(e.target.value, list.id)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => addOrEditTodo(list.id)}
            > {buttonText}</Button>      
        </Container>
    );
}

export default observer(AddTodo);