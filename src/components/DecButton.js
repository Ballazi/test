import React from 'react';
import Button from '@mui/material/Button';

const DecButton = (props) => {
    const decrease = () => {
        props.decrement();
    }
    return (
        <div>
            <Button
                variant="contained"
                disabled={props.initialValue === 0} 
                onClick={decrease}
                size="small"
                color="error"
            >
                Decrement
            </Button>
        </div>
    )
}

export default DecButton