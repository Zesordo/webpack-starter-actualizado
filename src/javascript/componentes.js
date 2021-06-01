import '../css/componentes.css';


export const saludar = (nombre) => {

    console.log('Creando etiqueta h2o');

    const h1 = document.createElement('h1');
    h1.innerText = `Greetings Mr. ${nombre}`;

    document.body.append(h1);

}