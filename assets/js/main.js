  const btnTheme = document.getElementById("theme-btn")
  const body = document.body
  const cartOpen= document.getElementById("cart-btn")
  const cartClose= document.getElementById("close-cart")
  const Contenedor = document.getElementById("cart-conteiner")
  
 
     const CambioDeColor = () => { 
     
      if(btnTheme.classList.contains("bx-sun")){
        btnTheme.classList.replace("bx-sun" , "bx-moon")
      }else{
        btnTheme.classList.replace("bx-moon" , "bx-sun")
      }
      body.classList.toggle("dark")
    }

    btnTheme.addEventListener("click", () => CambioDeColor())

    cartOpen.addEventListener("click", () => Contenedor.classList.remove("hide"))
    cartClose.addEventListener("click", () => Contenedor.classList.add("hide"))
    
/*  Carrito */





 
    

 