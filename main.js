const url = 'https://gamerpower.p.rapidapi.com/api/filter?platform=epic-games-store.steam.android&type=game.loot';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5129ccd1d4mshe7c74723a407a83p14209fjsn8cbb1bccae04',
		'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
	}
};

try {
    (async () => {
	const response = await fetch(url, options);
	const resultado = await response.json();
    pintarCard(resultado);
    console.log(resultado);
    })()
} catch (error) {
	console.error(error);
}
let contenedorDeCards = document.getElementById("cont-card");
let contenedorDestacados = document.getElementById("productos-inicio");

function crearCard( producto ){
    return ` <article class="card-product">
                <img src="${producto.image}" alt="${producto.title}" class="card-product-img">
                <p>${producto.title}</p>
                <div class="boton">
                <a href="./detalle.html?parametro=${producto.id}">Ver Más</a></div>
            </article>
             ` 
}
function pintarCard(productos){

    if(contenedorDeCards){
        for (let producto of productos){
            contenedorDeCards.innerHTML += crearCard(producto);
        }
    }
    if (contenedorDestacados) {
    
        const productosAleatorios = obtenerProductosAleatorios(productos, 3);

        for (let producto of productosAleatorios) {
            contenedorDestacados.innerHTML += crearCard(producto);
        }
    }
}

function obtenerProductosAleatorios(array, cantidad) {
    const copiaArray = [...array];
    const productosAleatorios = [];

    for (let i = 0; i < cantidad && copiaArray.length > 0; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
        const productoAleatorio = copiaArray.splice(indiceAleatorio, 1)[0];
        productosAleatorios.push(productoAleatorio);
    }

    return productosAleatorios;
}