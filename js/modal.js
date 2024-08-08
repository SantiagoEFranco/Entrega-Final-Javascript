const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const contador = document.getElementById("contador-carrito")

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});


cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
    
});

modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(event.target.value);
        
    };
});

modalCarrito.innerHTML += ' <p>ingresa tus datos para finalizar la compra</p> <input class="input" type="text" placeholder="Nombre y Apellido"> <input class="input" type="mail" placeholder="Email"> <input class="input" type="num" placeholder="Telefono"><br> <br> <button id="comprar">Comprar</button>'
const comprar = document.getElementById("comprar")


comprar.addEventListener("click", () =>{
   modalContenedor.classList.toggle("modal-close")
   localStorage.clear()
   contador.innerText = 0
   Swal.fire({
    title: "Muchas gracias!",
    text: "Tu compra se ha realizado con éxito!",
    icon: "success",
    showConfirmButton: false,
    timer: 2000
  });
  setTimeout(() => {
    document.location.reload()
  }, "2000");
})
   
   



