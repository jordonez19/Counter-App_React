
const name = 'Xavi'
const arreglo = [1,2,3,4,5]
const objeto = {
    name:'xavi',
    age: 27,
    color:'white'
}

const App = () => {

    return ( 
        <>
            <h1>This is {name}!</h1>
            <p>Soy un arreglo: [ {arreglo} ]</p>
            <p>Soy un objeto:  {objeto.name}, de  {objeto. age} anios, de color {objeto.color} </p>
            <p>este es un objeto con stringify: { JSON.stringify( objeto ) }</p>
        </>
    );
}

export default App;