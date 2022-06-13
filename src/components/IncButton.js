import React from 'react';
import Button from '@mui/material/Button';


const IncButton = (props) => {
    const increast = () => {
        props.increment();
    }
    return (
        <div>


            <Button
                variant="contained"
                onClick={increast}
                size="small"
                color="success"
            >
                Increment
            </Button>
        </div>
    )
}

export default IncButton