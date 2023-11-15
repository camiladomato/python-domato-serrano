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
	let resultado = await response.json();
    let producto = resultado.find(resultado => resultado.id === idProducto)


    crearCardDetalle(contenedorCardDetalle , producto)
    })()
} catch (error) {
	console.error(error);
}

let parametro = location.search;

let params = new URLSearchParams(parametro);

let idProducto = parseInt(params.get("parametro"));



//DOM

 let contenedorCardDetalle = document.getElementById("sec-card");

 function crearCardDetalle(elemento , producto){
    const precio = producto.worth === 'N/A' ? 'Precio no disponible' : `<span class="texto-card">Precio:</span> ${producto.worth}`;
    elemento.innerHTML += `<article class="card-product-detalle">
        <img src="${producto.image}" alt="${producto.title}">
        <div class="card-product-detalle-txt">
            <h3>${producto.title}</h3>
            <p id="descripcion">${producto.description}</p>
            <p>${precio}</p>
            <p><span class="texto-card">Tipo:</span> ${producto.type}</p>
            <p><span class="texto-card">Plataformas:</span> ${producto.platforms}</p>
            <p><span class="texto-card">Usuarios:</span> ${producto.users}</p>
        </div>
    </article>`;
    
 }
