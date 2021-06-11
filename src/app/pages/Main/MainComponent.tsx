import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../stores/rootStore';
import { useStyles } from "../../common/styles/styles"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListComponent from './ListComponent/ListComponent'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function MainComponent() {
    const classes = useStyles();
    const { listStore } = useStore();

    return (
        <Container className={classes.mainCo}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => listStore.addList()}
            > Add New List
            </Button> 
            <List>
                {listStore.lists.map(list => {
                    return (
                        <ListItem key={list.id}>
                            <ListComponent list={list} deleteList={listStore.deleteList}/>
                         </ListItem>
                    );
                 })}
            </List>
        </Container>
      );
}

export default observer(MainComponent);