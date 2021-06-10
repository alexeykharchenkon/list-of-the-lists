import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../stores/rootStore';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListComponent from './ListComponent/ListComponent'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: '#bde7ec',
        borderColor: '#000000',
        borderRadius: 5,
        padding: '15px 15px',
    },
  }));

function MainComponent() {
    const classes = useStyles();
    const { listStore } = useStore();

    return (
        <Container className={classes.root}>
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
                            <ListComponent list={list} />
                         </ListItem>
                    );
                 })}
            </List>
        </Container>
      );
}

export default observer(MainComponent);