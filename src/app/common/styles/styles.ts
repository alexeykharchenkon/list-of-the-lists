import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    addtitleCo: {
        background: '#dbebeb',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: '10px',
        marginBottom: '15px',
        alignItems: 'center',
    },
    titleCo: {
        background: '#dbebeb',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '15px',
        alignItems: 'center',
    },
    listCo: {
        width: '100%',
        background: '#efefef',
        borderColor: '#000000',
        borderRadius: 5,
        padding: '15px 15px',
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    listCoHead: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
        alignItems: 'center',
    },
    listCoUp: {
        display: 'flex',
    },
    addEditCo: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    todoCo: {
        background: '#cbebeb',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    todoCoList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    todoCoListItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    todoListCo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mainCo: {
        width: '100%',
        background: '#bde7ec',
        borderColor: '#000000',
        borderRadius: 5,
        padding: '15px 15px',
    },
  }));