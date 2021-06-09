import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/rootStore';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
    },
    title: {
        display: 'flex',
        fontSize: '24px',
    },
  }));

interface CProps {
    listId: string;
    titleId: string;
    title: string;
}

function TitlesList({listId, titleId, title} : CProps) {
    const classes = useStyles();
    const { todoStore} = useStore();

    return (
        <Container className={classes.root}>
            <Container className={classes.title}>
                <strong>{title}</strong>
            </Container>
             <Container className={classes.buttons}>
                <Button
                    color="primary"
                    style={{marginLeft: '10px'}}
                     onClick={() => todoStore.editTitle(titleId, listId)}
                > Edit </Button>
                 <Button
                    color="secondary"
                    style={{marginLeft: '10px'}}
                    onClick={() => todoStore.deleteTitle(titleId, listId)}
                 > Delete </Button>
             </Container>
        </Container>
    );
}

export default observer(TitlesList);