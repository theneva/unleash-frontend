import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    roleContainer: {
        marginTop: '2rem',
    },
    innerContainer: {
        width: '60%',
        minHeight: '100vh',
        padding: '4rem 3rem',
    },
    buttonContainer: {
        display: 'flex',
        marginTop: '1rem',
    },
    primaryBtn: {
        marginRight: '8px',
    },
}));