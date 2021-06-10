import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/store';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { ListType } from "../../../models/ListType";
import TodoComponent from '../TodoComponent/TodoComponent'
import TitleComponent from '../TitleComponent/TitleComponent'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: '#efefef',
        borderColor: '#000000',
        borderRadius: 5,
        padding: '15px 15px',
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    head: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
        alignItems: 'center',
    },
    up: {
        display: 'flex',
    },
  }));

interface CProps {
    list: ListType;
}

function ListComponent({list} : CProps) {
    const classes = useStyles();
    const { listStore} = useStore();

    return (
        <Container className={classes.root}>
            <Container className={classes.head}>
                <Container className={classes.up}>
                    <h1>Todo List</h1>
                </Container>
                <Container className={classes.up}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => listStore.deleteList(list.id)}
                     > Delete List </Button>
                </Container> 
            </Container>
            <TitleComponent list={list}/>
            <TodoComponent list={list}/>           
        </Container>
    );
}

export default observer(ListComponent);