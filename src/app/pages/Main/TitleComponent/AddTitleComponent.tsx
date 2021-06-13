import { observer } from 'mobx-react-lite';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { TitleProps } from "../../../common/models/Props/TitleProps";
import { useStyles } from "../../../common/styles/styles"

function AddTitle({list, titleValue, addTitle, valueOnChange} : TitleProps) {
    const classes = useStyles();

    return (
        <Container className={classes.addtitleCo}>
            <TextField 
                label="Add List Title" 
                value={titleValue}
                onChange={e => valueOnChange(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => addTitle(list.id)}
            > Save </Button>  
        </Container>
    );
}

export default observer(AddTitle);