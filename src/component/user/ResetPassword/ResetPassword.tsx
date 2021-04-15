import useLoading from '../../../hooks/useLoading';

import StandaloneBanner from '../StandaloneBanner/StandaloneBanner';
import ResetPasswordDetails from '../common/ResetPasswordDetails/ResetPasswordDetails';

import { useStyles } from './ResetPassword.styles';
import { Typography } from '@material-ui/core';
import ConditionallyRender from '../../common/ConditionallyRender';
import InvalidToken from '../common/InvalidToken/InvalidToken';
import useResetPassword from '../../../hooks/useResetPassword';
import StandaloneLayout from '../common/StandaloneLayout/StandaloneLayout';

const ResetPassword = () => {
    const styles = useStyles();
    const [
        token,
        _,
        error,
        loading,
        setLoading,
        invalidToken,
    ] = useResetPassword();
    const ref = useLoading(loading);

    return (
        <div ref={ref}>
            <StandaloneLayout>
                <ConditionallyRender
                    condition={invalidToken}
                    show={<InvalidToken />}
                    elseShow={
                        <ResetPasswordDetails
                            token={token}
                            setLoading={setLoading}
                        >
                            <Typography
                                variant="h2"
                                className={styles.title}
                                data-loading
                            >
                                Reset password
                            </Typography>
                        </ResetPasswordDetails>
                    }
                />
            </StandaloneLayout>
        </div>
    );
};

export default ResetPassword;