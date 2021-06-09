import { observer } from 'mobx-react-lite';
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListType } from "../../../models/ListType";
import { useStore } from '../../../stores/rootStore';
import AddTitle from './AddTitle'
import EditTitle from './EditTitle'
import TitlesList from './TitlesList'

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#dbebeb',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginBottom: '15px',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    listitem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  }));

interface CProps {
    list: ListType;
}

function TitleComponent({list} : CProps) {
    const classes = useStyles();
    const { todoStore} = useStore();

    return (
        <Container className={classes.root}>
            <h2>List Titles</h2>
            <AddTitle list={list}/>
            {list.editTitleMode && <Container><EditTitle list={list}/></Container>}
             
            <List className={classes.list}>
                {list.title.map(tit => {
                    return(
                        <ListItem key={tit.id} className={classes.listitem}>
                            <TitlesList titleId={tit.id} listId={list.id} title={tit.title}/>
                         </ListItem>
                    );     
                })}
            </List>
        </Container>
    );
}

export default observer(TitleComponent);