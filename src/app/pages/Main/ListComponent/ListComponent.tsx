import { observer } from 'mobx-react-lite';
import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TodoComponent from '../TodoComponent/TodoComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import { useStyles } from "../../../common/styles/styles"
import { ListProps } from "../../../common/models/Props/ListProps";


function ListComponent({list, deleteList} : ListProps) {
    const classes = useStyles();

    return (
        <Container className={classes.listCo}>
            <Container className={classes.listCoHead}>
                <Container className={classes.listCoUp}>
                    <h1>Todo List</h1>
                </Container>
                <Container className={classes.listCoUp}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteList(list.id)}
                     > Delete List </Button>
                </Container> 
            </Container>
            <TitleComponent list={list}/>
            <TodoComponent list={list}/>           
        </Container>
    );
}

export default observer(ListComponent);