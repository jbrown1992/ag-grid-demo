import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useContext } from 'react';
import { TickerContext } from '../../context/tickerContext';
import { useNavigate } from 'react-router';
const Summary = () => {

    const [localTicker, setLocalTicker] = React.useState('');
    const { ticker, setTicker } = useContext(TickerContext);
    console.log("tickerLocal:" + localTicker)
    console.log("ticker:" + ticker)
    const navigate = useNavigate();

    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Enter Ticker"
                variant="outlined"
                value={localTicker}
                onChange={e => setLocalTicker(e.target.value)} />
            <Button variant="contained" onClick={() => setTicker(localTicker)}>Contained</Button>
            <b>Ticker {ticker}</b>
            <Button variant="contained" onClick={() => navigate("/cashflow")}>Cashflow</Button>

        </div>
    )
}

export default Summary;