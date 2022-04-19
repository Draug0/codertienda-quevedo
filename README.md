# RED BOOK - Librería Online

## Proyecto de React JS - Coder House

### Dependencias utilizadas

Como dependencias utilicé Bulma y Node-sass. Bulma ya que es un framework de CSS que ya había usado y me pareció muy limpió y simple. Y por último, node-sass porque querías modificar valores de Bulma (simplemente retoqué colores) y necesitaba un compilador de Sass.

## Explicación

La tienda que decidí desarrollar es una librería online (el nombre proviene del Libro Rojo de Westmarch). Me pareció que los libros tenían diferentes características (categorías, tapa dura o tapa blanda, de bolsillo, etc) para categorizar y así poder implementar diferentes filtros. Para la entrega intermedia me limité por consigna a filtrarlos por categorías: fantasía, ciencia ficción y novela.

La creación del Navbar y los container fue directa y sencilla gracias a Bulma. Además, estaba buscando que los componentes Item fueran responsive a la hora de mapearlos y allí el framework también me ayudó con la implementación de columnas. Utilicé tarjetas para ellos, y le apliqué un marcador con el precio para que se destacara más. Para el ItemDetail, decidí crear un layout simple con una imagen a la izquierda, la descripción en el medio, y el precio y controladores a la derecha. A su vez, ItemDetail es responsive.

Las función mockFetch es una promesa cuya respuesta es una lista de todos los ítems disponibles. Y la función getItem recibe como argumento un id y devuelve una promesa cuya respuesta es el item que su id coincide.

Para mejorar un poco la navegación, implementé un breadcrumb que marqué un caminó general para que el usuario sepa exactamente dónde está. Asimismo, agregué un botón que permite volver a la página anterior debajo de los detalles de precio en ItemDetail.

Además, creé una página que mapea los ítems en oferta. Básicamente, lee una propiedad de cada ítem llamada "sale" que es un booleano, y mapea solo los ítems donde es verdadera.

## To run the project locally

Clone the project

```bash
  git clone https://github.com/Draug0/codertienda-quevedo
```

Go to the project directory

```bash
  cd codertienda-quevedo
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
