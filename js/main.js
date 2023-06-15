
let carrito = [];
let productos = [];

class Producto{
    constructor(id, nombre, marca, precio){
        this.id     = id;
        this.nombre = nombre;
        this.marca  = marca;
        this.precio = precio;
    }
}

const crearProductos = () => {

    const prod1 = new Producto(1,'Galaxy A52S', 'Samsung', 1439);
    const prod2 = new Producto(2,'Galaxy A32', 'Samsung', 859);
    const prod3 = new Producto(3,'Galaxy A22', 'Samsung', 729);
    const prod4 = new Producto(4,'Redmi Note 11', 'Xiaomi', 769);
    const prod5 = new Producto(5,'Redmi Note 11 Pro', 'Xiaomi', 1299);
    const prod6 = new Producto(6,'Redmi 9A', 'Xiaomi', 409);
    const prod7 = new Producto(7,'Iphone 11', 'Apple', 2828);
    const prod8 = new Producto(8,'Iphone 13', 'Apple', 3929);
    const prod9 = new Producto(9,'Iphone 13 Pro Max', 'Apple', 5599);
    
    productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9);
}

crearProductos();

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
        let productosCarrito = recorrerCarrito();
        let precioTotal = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        alert('::::::::::::::::::::::::: Carrito de Compras :::::::::::::::::::::::: \n\n'
              + productosCarrito + '\n'
              + 'Total a Pagar: $ '
              + precioTotal);
    }
}

const recorrerCarrito = () => {

    let productosCarrito = '';
    carrito.forEach( producto => {
        productosCarrito   += 'Codigo ('+ producto.id +') \t ' 
                            + ' Nombre: ' + producto.nombre
                            + ' || Precio: $ '+ producto.precio + '\n';
    })
    return productosCarrito;
}

const eliminarProducto = () => {

    if(carrito.length == 0){
        alert('Tu Carrito aún no tiene Productos')
    }else{
        let productosCarrito = recorrerCarrito();
        let id = Number(prompt(
                        ':::::::::::::::::::::: Eliminar Producto del Carrito ::::::::::::::::::::::'
                        + '\n\n'+ productosCarrito 
                        + '\n Digite el Código del Producto a Eliminar:'));

        let indice = carrito.findIndex( producto => producto.id == id);

        if(indice !== -1){
            carrito.splice(indice, 1);
            alert('¡Producto Eliminado del Carrito!');
        }else{
            alert('¡El Producto no se encuentra en el Carrito!');
        }
    }
}

const vaciarCarrito = () => {

    if(carrito.length == 0){
        alert('Tu Carrito aún no tiene Productos');
    }else{
        carrito.splice(0, carrito.length);
        alert('¡Vaciaste tu Carrito!')
    }
}

const iniciarApp = () => {
    let opc;
    let salir = false;
    do {
        opc = Number(prompt('::::::::::::::::::::::::: Tienda de Celulares :::::::::::::::::::::::::\n\n'+ 
                    '1. Tienda Virtual \n'+
                    '2. Ver Carrito \n'+
                    '3. Eliminar Producto \n'+ 
                    '4. Vaciar Carrito \n'+ 
                    '5. Salir \n\n'+ 
                    'Elija una Opción:'));
    
        if(opc === 1){
            menuCategorias();
        }
        else if(opc === 2){
            verCarrito();
        }
        else if(opc === 3){
            eliminarProducto();
        }
        else if(opc === 4){
            vaciarCarrito();
        }
        else if(opc === 5){
            salir = true;
        }
        else if( opc < 1 || opc > 5 || isNaN(opc) == true){
            alert('¡Opción No Valida!')
        }
    } while ( salir == false || isNaN(opc) == true);
}

iniciarApp();

