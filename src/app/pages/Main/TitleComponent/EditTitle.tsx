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

function EditTitle({list} : CProps) {
    const { titleStore} = useStore();

    return (
        <Container>
            <TextField 
                id={list.id}
                value={list.editTitleValue}
                onChange={titleStore.editTitleValueChange}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => titleStore.editTitleValueSave(list.id)}
            >Save</Button>      
        </Container>
    );
}

export default observer(EditTitle);