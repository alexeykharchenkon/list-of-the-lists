import { observer } from 'mobx-react-lite';
import React from 'react';
import Container from '@material-ui/core/Container';
import { TodoList } from "../../../common/models/TodoList";
import AddTitleComponent from './AddTitleComponent'
import { useStore } from '../../../stores/rootStore';
import { useStyles } from "../../../common/styles/styles"

interface CProps {
    list: TodoList;
}

function TitleComponent({list} : CProps) {
    const classes = useStyles();
    const { listStore, titleStore} = useStore();

    return (
        <Container className={classes.titleCo}>
            <h2>{list.title}</h2>
            {listStore.titleCreateMode && !list.title && 
            <AddTitleComponent 
                list={list}
                titleValue={titleStore.titleValue}
                addTitle={titleStore.addTitle} 
                valueOnChange={titleStore.valueOnChange}
            />
            }
        </Container>
    );
}

export default observer(TitleComponent);