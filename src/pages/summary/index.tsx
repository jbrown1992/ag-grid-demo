import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useContext } from 'react';
import { TickerContext } from '../../context/TickerContext';
import { useNavigate } from 'react-router';
import { pages } from '../../routes/pages';
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
            <Button variant="contained" onClick={() => setTicker(localTicker)}>Select Ticker</Button>
            <div>
                <b>Ticker {ticker}</b>
                <Button variant="outlined" onClick={() => navigate(pages.incomeStatement)}>Income Statement</Button>
                <Button variant="outlined" onClick={() => navigate(pages.balanceSheet)}>Balance Sheet</Button>
                <Button variant="outlined" onClick={() => navigate(pages.cashFlow)}>Cash Flow</Button>
            </div>
        </div>
    )
}

export default Summary;