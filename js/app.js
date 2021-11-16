//Variables

const d = document;
const carrito = d.querySelector("#carrito");
const vaciarCarrito = d.querySelector("#vaciar-carrito");
const divCarrito = d.querySelector("#lista-carrito tbody");
const listaArticulos = d.querySelector("#lista-articulos");
let articulosCarrito = [];

//funciones
registrarEventListeners();
//Agregar articulo
function registrarEventListeners() {
  listaArticulos.addEventListener("click", agregarArticulo);
}

function agregarArticulo(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const articuloSel = e.target.parentElement.parentElement;
    /* console.log(e.target.parentElement.parentElement); */
    leeDatosArticulo(articuloSel);
  }
}

//leer el HTML DONDE DIMOS CLICK (EL CARD)

function leeDatosArticulo(articulo) {
  /* console.log(articulo); */
  //crear un objeto con el contenido del articulo
  const infoArticulo = {
    imagen: articulo.querySelector("img").src,
    titulo: articulo.querySelector("h4").textContent,
    precio: articulo.querySelector(".precio span").textContent,
    id: articulo.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  const existe = articulosCarrito.some(
    (articulo) => articulo.id === infoArticulo.id
  );
  /* console.log(existe); */
  if (existe) {
    //actualizar cantidad carrito
    const articulos = articulosCarrito.map((articulo) => {
      if (articulo.id === infoArticulo.id) {
        articulo.cantidad++;
        return articulo;
      } else {
        return articulo;
      }
    });
    articulosCarrito = [...articulos];
  } else {
    //agregar como nuevo al carrito
    articulosCarrito = [...articulosCarrito, infoArticulo];
  }
  console.table(articulosCarrito);
  /* console.table(articulosCarrito); */
  carritoHTML();
}
