import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value )

    const handleAdd = () => {
        /* setCounter( counter +1) */
        setCounter( (c) => c + 1 ) /* el valor der retorno va a ser el nuevo counter */
    }

    return ( 
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd } > 
                Click +1
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;