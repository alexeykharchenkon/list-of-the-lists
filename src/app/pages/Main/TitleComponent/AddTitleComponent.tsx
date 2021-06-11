import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/rootStore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { TodoList } from "../../../common/models/TodoList";

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#dbebeb',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: '10px',
        marginBottom: '15px',
        alignItems: 'center',
    },
  }));

interface CProps {
    list: TodoList;
}

function AddTitle({list} : CProps) {
    const { titleStore } = useStore();
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <TextField 
                id={list.id} 
                label="Add List Title" 
                value={titleStore.titleValue}
                onChange={titleStore.ValueChangeHandler}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => titleStore.addTitle(list.id)}
            > Save </Button>  
        </Container>
    );
}

export default observer(AddTitle);