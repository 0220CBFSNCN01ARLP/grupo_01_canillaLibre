# PROYECTO INTEGRADOR - Digital House

## Proyecto e-commerce

### Nombre del Proyecto: "Canilla Libre"

### Integrantes: Grupo01

Franco Martin
<br>Diego Ratti
<br>Javier Solari Paz

-   ### Repositorio - github:

https://github.com/zapiralos/grupo_01_canillaLibre.git

-   ### Tablero de Trabajo en Trello

https://trello.com/b/MmC3LzMI/grupo01canillalibre

-   ### Documentación:
    DER<br>
    Script de Poblacion de Tablas<br>
    Imagenes para crear publicaciones<br>

https://trello.com/b/MmC3LzMI/grupo01canillalibre

---

### Objetivo:

Plataforma de comercio electrónico para el rubro Cervecero.
<br>En Canilla Libre se vende:
<br>- Variedad de Cervezas.
<br>- Presentaciones de Cervezas (latas, botellas, porrones, barriles, choperas, etc)
<br>- Promociones
<br>- Alquileres
<br>- Merchandesing
<br>- Insumos para Fabricacion
<br>- Cursos
<br>- Podcast

### Audiencia:

Todo publico mayor de 18 años.

#### Vendedores:

Minoristas y Pequeños Fabricantes: que quieran hacer conocer sus productos.
<br>Importadores
<br>Mayoristas y Grandes Fabricantes: que quieran competir con precio/calidad, nuevos productos (Promociones).

#### Consumidor Final:

Quienes buscan elegir/comprar por gusto, afinidad o precio dentro de la más grande plataforma del Rubro Cervecero.

#### Revendedores:

Comerciantes, que compran cantidad/Promociones para obtener ganancia. Bares, Hoteles, Cervetecas, Vinotecas y Supermercados.

### Oferta:

La plataforma cobra comisiones por transacciones realizadas y obtiene ganancias por la logistica de envíos. Tambien por publicidad
<br>Dando lugar a que el Vendedor obtenga renombre por sus ventas y reputacion por su compromiso y calidad.
<br>Y consiguiendo el Consumidor el producto que estaba buscando tanto por precio, por cercania, calidad, variedad, gusto, etc.

### Links de referencia

https://reverb.com/ (intrumentos musicales-usa). Se eligio por funcionamiento. Es un sitio de compras y ventas online entre particulare y tambien participan empresas dirigido al rubro de los instrumentos musicales. Es muy completo y tiene, ademas del e-shop, notas de interes, podcast, tutoriales, comparativas de articulos.

https://www.mercadolibre.com.ar/ (varios - argentina) El sitio de subastas por excelencia en Argentina y Latinoamerica. Excelente interfaz grafica, y proceso de compra-venta-ditribucion online. Seguridad en transacciones

https://craftcentral.ie/ (eshop cerveza -irlanda). Eshop especifico de erveza en Irlanda. Se eligio por estetica del site y variedad de productos para venta.

https://drizly.com/beer/c2 (Web info cervezas) Aqui obtuvimos informacion acerca de las clases y estilos de cervezas artesanles e importadas que brindaremos en nuestra web.

---

-   ## API´s - Productos:

#### **GET:**

#### Muestra la cantidad y todos los productos:

/api/products/

#### Muestra el detalle de cada producto y su relación con tablas y usuarios: que genera la publicación

/api/products/:id

#### Muestra el último producto cargado en la DataBase:

/api/products/lastproduct

#### **DELETE:**

#### Borrar producto:

/api/products/:id

-   ## API´s - Usuarios:

#### **GET:**

#### Muestra la cantidad y todos los usuarios:

/api/profile/

#### Muestra el detalle de cada usuario

/api/profile/:id

---
