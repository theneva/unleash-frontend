import { useState } from 'react';
import { Alert } from '@material-ui/lab';
import ConditionallyRender from '../ConditionallyRender';
import { Typography } from '@material-ui/core';
import { useStyles } from './Proclamation.styles';

interface IProclamationProps {
    toast: IToast;
}

interface IToast {
    message: string;
    id: string;
    severity: 'success' | 'info' | 'warning' | 'error';
    link: string;
}

const renderProclamation = (id: string) => {
    if (localStorage) {
        const value = localStorage.getItem(id);
        if (value) {
            return false;
        }
    }
    return true;
};

const Proclamation = ({ toast }: IProclamationProps) => {
    const [show, setShow] = useState(renderProclamation(toast.id));
    const styles = useStyles();

    const onClose = () => {
        if (localStorage) {
            localStorage.setItem(toast.id, 'seen');
        }
        setShow(false);
    };

    return (
        <ConditionallyRender
            condition={show}
            show={
                <Alert
                    className={styles.proclamation}
                    severity={toast.severity}
                    onClose={onClose}
                >
                    <Typography className={styles.content} variant="body2">
                        {toast.message}
                    </Typography>
                    <a
                        href={toast.link}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View more
                    </a>
                </Alert>
            }
        />
    );
};

export default Proclamation;
