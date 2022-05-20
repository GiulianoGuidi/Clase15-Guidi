const contenedorProductos = document.getElementById('contenedorProductos')


const obtenerProductos = async () =>{
    const responseProd = await
    fetch("menu.json");

    const productos = await responseProd.json();

    productos.forEach((producto) =>{
        let div = document.createElement('div')
        div.innerHTML = `
        <div class= "card" style="width: 18rem;">
        <div class="card-body">
        <img class='img' src = ${producto.img}> 
        <h3> ${producto.nombre} </h3>
        <p> ${producto.categoria} </p>
        <p> ${producto.precio} </p>
        </div>
        </div>
        `
        contenedorProductos.append(div)
    })
}

obtenerProductos()







