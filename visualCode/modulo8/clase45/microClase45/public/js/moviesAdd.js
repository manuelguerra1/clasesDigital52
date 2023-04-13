window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let estadoSecreto = 0
    let input = document.querySelector('#titulo')

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'blue'
    })

    titulo.addEventListener('mouseout', () => {
        titulo.style.color = 'black'
    })

    switch (estadoSecreto) {
        case value:
            
            break;
    
        default:
            break;
    }

}