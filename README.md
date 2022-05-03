# RED BOOK - Librería Online

Proyecto de React JS - Coder House

## Demo

<https://red-book.vercel.app/>

### Dependencias utilizadas

Como dependencias extras utilicé Bulma y Formik. Bulma ya que es un framework de CSS que ya había usado antes y me pareció muy limpió y simple. Y por último, Formik lo utilicé para falicittar la validación, manejo y subida de formularios.

## Explicación

La tienda que decidí desarrollar es una librería online (el nombre proviene del Libro Rojo de Westmarch). Me pareció que los libros al dividirse innatamente en categorías (ficción, aventura, etc) eran perfectos para realizar un e-commerce. Para este proyecto me limité a hacer las siguientes categorías: fantasía, ciencia ficción y novela.

La creación del Navbar y los Containers fue directa y sencilla gracias a Bulma. Además, estaba buscando que los componentes Item fueran responsive a la hora de mapearlos y allí el framework también me ayudó con la implementación de columnas. Utilicé tarjetas para ellos, y le apliqué un marcador con descuentos para que se destacaran más aquellos con ofertas. Para el ItemDetail, decidí crear un layout simple con una imagen a la izquierda, la descripción en el medio, y el precio y controladores a la derecha. A su vez, ItemDetail es responsive.

Para mejorar un poco la navegación, implementé un breadcrumb que marqué un caminó general para que el usuario sepa exactamente dónde está. Asimismo, agregué un botón que permite volver a la página anterior debajo de los detalles de precio en ItemDetail.

Además, creé una página que mapea los ítems en oferta. Básicamente, lee una propiedad de cada ítem llamada "sale" que es un booleano, y mapea solo los ítems donde es verdadera.

A la hora de finalizar tu compra decidí poner unos steps al fondo para que el usuario sepa donde se cuanto falta para terminar la orden. Primero está el carrito, allí decidí crear una tabla donde cada ítem pudiera modificar la cantidad que pueda comprar (haciendo click en el lápiz al lado de nº de cantidad) y eliminar el producto en cuestión con el tacho de basura. Luego está el Checkout, allí se maneja la lógica más grande de toda la aplicación. Usé formik para la validación y manejo de subida de los datos del usuario. Formik resultó muy útil para la implementación de diferentes mensajes para que el usuario sepa dónde están los errores en sus datos. Con respecto a la función de submit, decidí no solo chequear el stock, sino que también el precio. Esto es porque al jugar con las herramientas de desarrollador me dí cuenta que se pueden modificar los valores de los estados de los componentes. Y al agregar ese pequeño paso no arriesgo el cambio de precios, ni el estado de oferta de un ítem. Al final, te muestra tu orden finalizada con toda la información anotada. Le agregué un botón que copia el número de orden para mejorar la accesibilidad.

El carrito se guarda con localstorage para poder reanudar la compra si se cierra la página. Me preocupaba el hecho que se pueden modificar los valores de localstorage, pero al validar el stock y el precio cuando se crea la orden, hace que cualquier modificación sea prácticamente inútil.

Además decidí implementar una búsqueda de orden para que el usuario pueda chequear la información de su pedido. Para proteger la información sensible de los usuarios hice que sus datos se ocultaran dejando solo iniciales, o un par de números a la vista.

Por último creé un footer con un sitemap para que cualquier usuario pueda acceder a cualquier otra ruta importante de la aplicación donde sea que esté.

## Para correr el proyecto localment

Clonar el proyecto

```bash
  git clone https://github.com/Draug0/codertienda-quevedo
```

Ve a la carpeta del proyecto

```bash
  cd codertienda-quevedo
```

Instala las dependencias

```bash
  npm install
```

Inicia el servidor de desarrollo

```bash
  npm run start
```
