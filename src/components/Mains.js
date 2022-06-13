import { Grid } from '@mui/material';
import React, { useState } from 'react'
import DecButton from './DecButton';
import IncButton from './IncButton';

const Mains = () => {
    const [initialValue, setInitialValue] = useState(1);
    const increment = () => {
        setTimeout(() => { setInitialValue(initialValue + 1) }, "1000")
    }
    const decrement = () => {
        setTimeout(() => { setInitialValue(initialValue - 1) }, "1000")
    }
    return (
        <div>
            <Grid style={{margin:"100px auto"}} container direction="column" justifyContent="center" alignItems="center">
                <Grid>Counter App</Grid>
                <Grid> {initialValue}</Grid>
                <Grid>< DecButton initialValue={initialValue} decrement={decrement} /> {"  "} < IncButton increment={increment} /></Grid>

            </Grid>
            {/* < DecButton initialValue={initialValue} decrement={decrement} />
            <span>{initialValue}</span>
            < IncButton increment={increment} /> */}
        </div>
    )
}

export default Mains