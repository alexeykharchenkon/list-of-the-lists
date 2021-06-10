import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../stores/store';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { ListType } from "../../../models/ListType";

interface CProps {
    list: ListType;
}

function AddTitle({list} : CProps) {
    const { titleStore} = useStore();

    return (
        <Container>
            <TextField 
                id={list.id} 
                label="Add List Title" 
                value={list.addTitleValue}
                onChange={titleStore.addTitleValueChange}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => titleStore.addTitle(list.id)}
            > Add </Button>  
        </Container>
    );
}

export default observer(AddTitle);