const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

    const ProductosCart = document.getElementById("Counter-Products")
    const ContenedorCarrito = document.getElementById("Consumir")
    const vaciarCarrito= document.getElementById("Vaciarcarrito")
    const Contadorcarrito = document.getElementById("cart-counter")
    const PrecioTotal = document.getElementById("PrecioTotal")
    const carrito =[]
     
    document.addEventListener(`DOMContentLoaded`,() => {
        if(localStorage.getItem("carrito")){
           carrito = JSON.parse(localStorage.getItem("carrito"))
           Actualizar()
        }
    })

    vaciarCarrito.addEventListener("click",() =>{
        carrito.length=0
        Actualizar()
    })


    items.forEach(producto => {
    const div = document.createElement("div")
    div.classList.add("CartCenter")
    div.innerHTML=`
    <img src=${producto.image} alt= ""> 
    <h3>${producto.name}</h3>
    <p class="PrecioProductos">Precio: ${producto.price} </p>
    <p>Cantidad : <span id="Cantidad">${producto.quantity} </span></p>
    <button id="agregar${producto.id}" class="boton-agregar"> Agregar <i class='bx bx-cart-add'></i> </button>
    `
    ProductosCart.appendChild(div)
   
    const car = document.getElementById(`agregar${producto.id}`)

   

    car.addEventListener(`click`,() =>{
        agregarAlCarrito(producto.id)
     })
  
   
  
  })

    const agregarAlCarrito = (produtoId) => {
    const objeto = items.find((produ) => produ.id === produtoId) 
    carrito.push(objeto)
    Actualizar()
    console.log(carrito)
  }

    const eliminarDelCarrito = (produtoId2) => {
    const item = carrito.find((prod) => prod.id === produtoId2 )
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
     Actualizar()
  }

   const Actualizar = () => {
    ContenedorCarrito.innerHTML=""

         carrito.forEach((produ) =>{
         const div = document.createElement(`div`)
         div.className = (`ProductoCarrito`)
         div.innerHTML= `
         <img src=${produ.image} alt= ""> 
         <p>${produ.name} </p>
         <p>Precio: ${produ.price} </p>
         <p>Cantidad : <span id="Cantidad">${produ.quantity} </span></p>
         <button onclick="eliminarDelCarrito(${produ.id}) " class="Boton-eliminar" > <i class='bx bx-trash'></i></button>
          `
         ContenedorCarrito.appendChild(div)
         localStorage.setItem("carrito",JSON.stringify(carrito))
     })
     Contadorcarrito.innerHTML = carrito.length
     PrecioTotal.innerHTML = carrito.reduce((a ,prod) =>a +prod.price,0)
  }