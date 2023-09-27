import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, currency, currencyName } = useContext(AppContext);

    const changeCurrency = (value) => {
        const [newCurrency, newCurrencyName] = value.split('-');
        const payload = {
            currency: newCurrency,
            currencyName: newCurrencyName,
        };

        dispatch({
            type: 'CHG_CURRENCY',
            payload
        });
    }

    return (
<div>
    <select className="custom-select-green" id="inputGroupSelect04" onChange={(event) => changeCurrency(event.target.value)}>
            <option disabled selected value="">Currency ({currency} {currencyName})</option>
    <option value="$-dollar" name="dollar">$ Dollar</option>
    <option value="£-pound" name="pound">£ Pound</option>
    <option value="€-euro" name="euro">€ Euro</option>
    <option value="₹-ruppee" name="ruppee">₹ Ruppee</option>
        </select>
</div>
    );
};
export default Budget;
