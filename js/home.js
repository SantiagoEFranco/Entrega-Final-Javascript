const pintarProductos = (productos) => {
  const contenedor = document.getElementById("producto-contenedor");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.imagen}>
                        <span class="card-title">${producto.nombre}</span>
                        
                      </div>
                      <div class="card-content">
                      <a id="card-btn" class="btn-floating halfway-fab wabes-effect waves-light green"><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                          <p>${producto.desc}</p>
                          <p class="card-precio">${producto.precio}</p>
                      </div>
                      `
    contenedor.appendChild(div);
  });
};