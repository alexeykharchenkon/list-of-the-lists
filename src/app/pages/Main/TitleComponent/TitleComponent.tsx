import { observer } from 'mobx-react-lite';
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { TodoList } from "../../../common/models/TodoList";
import AddTitle from './AddTitle'
import { useStore } from '../../../stores/rootStore';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#dbebeb',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '15px',
        alignItems: 'center',
    },
  }));

interface CProps {
    list: TodoList;
}

function TitleComponent({list} : CProps) {
    const classes = useStyles();
    const { listStore} = useStore();

    return (
        <Container className={classes.root}>
            <h2>{list.title}</h2>
            {listStore.titleCreateMode && !list.title && <AddTitle list={list}/>}
        </Container>
    );
}

export default observer(TitleComponent);