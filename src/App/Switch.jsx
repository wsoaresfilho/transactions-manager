import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const PurpleSwitch = withStyles({
    switchBase: {
        color: teal[300],
        '&$track': {
            backgroundColor: teal[100],
        },
        '&$checked': {
            color: teal[800],
        },
        '&$checked + $track': {
            backgroundColor: grey[800],
        },
    },
    checked: {},
    track: {},
})(Switch);

export default function CustomizedSwitches(props) {
    const [customsProps, setCustomState] = React.useState(props);

    React.useEffect(() => {
        setCustomState(props);
    }, [props]);

    const handleChange = () => {
        customsProps.onChange();
    };

    return (
        <FormGroup>
            <Typography component='div'>
                <Grid
                    component='label'
                    container
                    alignItems='center'
                    spacing={1}
                >
                    <Grid item>Light Theme</Grid>
                    <Grid item>
                        <PurpleSwitch
                            checked={customsProps.isChecked}
                            onChange={() => handleChange()}
                        />
                    </Grid>
                    <Grid item>Dark Theme</Grid>
                </Grid>
            </Typography>
        </FormGroup>
    );
}
