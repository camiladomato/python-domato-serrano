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
    console.log(resultado)
    console.log(resultado[0].id)
    let producto = resultado.find(resultado => resultado.id === idProducto)
   console.log(producto);

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
    elemento.innerHTML +=`<article class="card-product-detalle">
    <img src="${producto.image}" alt="">
    <div class="card-product-detalle-txt">
        <h3>${producto.title}</h3>
        <p>Precio:${producto.worth}</p>
        <p id="descripcion">${producto.description}</p>
        <p>tipo:${producto.type}</p>
        <p>Plataformas:${producto.platforms}</p>
        <p>Usuarios:${producto.users}</p>
    </div>
</article>
 ` 
    
 }
