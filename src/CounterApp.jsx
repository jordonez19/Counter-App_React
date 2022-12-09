import PropTypes from 'prop-types';
import { useState } from 'react';
import { render } from 'react-dom';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value )
    const handleAdd = () => {
        /* setCounter( counter +1) */
        setCounter( (c) => c + 1 ) /* el valor der retorno va a ser el nuevo counter */
    }
    const handleRest = () => {
        setCounter( counter -1)
    }
    const handleReset= () =>{
        setCounter(value)
    }

    return ( 
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleRest } >  -1 </button>
            <button onClick={ handleReset } >  Reset </button>
            <button onClick={ handleAdd } >  +1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;