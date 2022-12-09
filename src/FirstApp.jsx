import PropTypes from 'prop-types';

const FirstApp = ( { title, age, name } ) => {
    
    return (
        <>
            <h1>Hello</h1>
            <p>I am { title } & I am { age } years old</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.any.isRequired,
    age: PropTypes.any.isRequired
}

FirstApp.defaultProps = {
    age: 'age',
    name: 'xavi dev',
    title: 'name',
}

export default FirstApp;