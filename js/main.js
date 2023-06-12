
let carrito = [];
let productos = [
                    {id: 1, nombre: 'Galaxy A52S', marca: 'Samsung', precio: 1439},
                    {id: 2, nombre: 'Galaxy A32', marca: 'Samsung', precio: 859},
                    {id: 3, nombre: 'Galaxy A22', marca: 'Samsung', precio: 729},
                    {id: 4, nombre: 'Redmi Note 11', marca: 'Xiaomi', precio: 769},
                    {id: 5, nombre: 'Redmi Note 11 Pro', marca: 'Xiaomi', precio: 1299},
                    {id: 6, nombre: 'Redmi 9A', marca: 'Xiaomi', precio: 409},
                    {id: 7, nombre: 'Iphone 11', marca: 'Apple', precio: 2828},
                    {id: 8, nombre: 'Iphone 13', marca: 'Apple', precio: 3929},
                    {id: 9, nombre: 'Iphone 13 Pro Max', marca: 'Apple', precio: 5599},
                ]

const menuCategorias = () => {
    let arrayFiltrado = [];
    let opcCateg;
    let salirMenuCateg = false;
    do{
        opcCateg = Number(prompt(':::::::::::::::::::::: Categoria de Celulares :::::::::::::::::::::\n\n' 
                            + '1. Samsung \n'
                            + '2. Xiaomi \n'
                            + '3. Apple \n' 
                            + '4. Volver al Menú Principal \n\n'
                            + 'Elija una opción:'));
        if(opcCateg === 1){
            arrayFiltrado = productos.filter( producto => producto.marca === 'Samsung')
            mostrarProductos(arrayFiltrado);
        }
        else if(opcCateg === 2){
            arrayFiltrado = productos.filter( producto => producto.marca === 'Xiaomi')
            mostrarProductos(arrayFiltrado);
        }
        else if(opcCateg === 3){
            arrayFiltrado = productos.filter( producto => producto.marca === 'Apple')
            mostrarProductos(arrayFiltrado);
        }
        else if(opcCateg === 4){
            salirMenuCateg = true;
        }
        else if( opcCateg < 1 || opcCateg > 4 || isNaN(opcCateg) == true ){
            alert('¡Opcion No Valida!')
        }

    }while( salirMenuCateg == false || isNaN(opcCateg) == true );
}

const mostrarProductos = (arrayFiltrado) => {
    let celulares = '';
    console.log(arrayFiltrado)
    arrayFiltrado.forEach((producto) => {
        
        celulares += 'Codigo ('+ producto.id +') \t '+'Nombre: '+ producto.nombre + ' - Precio: $ ' + producto.precio + '\n';
    })

    let productoAComprar;
    do {
        let codProducto = prompt(':::::::::::::::::::::: Modelos de Celulares ::::::::::::::::::::::\n\n'
                                + celulares + '\n' 
                                + 'Digite el Codigo del Producto a Comprar: ');

        productoAComprar =  arrayFiltrado.find( producto => producto.id == codProducto);

        if(productoAComprar === undefined){
            alert('¡Código Inválido!');
        }else{
            alert('¡Genial, se añadio el Producto al Carrito!')
        }

    } while (productoAComprar == undefined);

    carrito.push(productoAComprar);
}

const verCarrito = () => {

    if(carrito.length === 0){
        alert('¡Tu Carrito esta Vacío!')
    }else{
        productosCarrito = '';
        carrito.forEach( producto => {
            productosCarrito +=   'Nombre: ' + producto.nombre + '\n'
                                + 'Precio: $ ' + producto.precio + '\n'
                                + '==========================='+ '\n';
        })
        let precioTotal = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        alert('::::::::::::::::::::::::: Carrito de Compras :::::::::::::::::::::::: \n\n'
              + productosCarrito + '\n'
              + 'Total a Pagar: $ '
              + precioTotal);
    }
}

const iniciarApp = () => {
    let opc;
    let salir = false;
    do {
        opc = Number(prompt('::::::::::::::::::::::::: Tienda de Celulares :::::::::::::::::::::::::\n\n'+ 
                    '1. Tienda Virtual \n'+
                    '2. Ver Carrito \n'+
                    '3. Salir \n\n'+ 
                    'Elija una Opción:'));
    
        if(opc === 1){
            menuCategorias();
        }
        else if(opc === 2){
            verCarrito();
        }
        else if(opc === 3){
            salir = true;
        }
        else if( opc < 1 || opc > 3 || isNaN(opc) == true){
            alert('¡Opción No Valida!')
        }
    } while ( salir == false || isNaN(opc) == true);
}

iniciarApp();

