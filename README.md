# SILVER API

API para el control de los productos de un inventario, los cuales ingresan por facturas de compraa proveedores y se rebajan con movimientos de venta o ajuste de inventario.

## Documentación
La documentación de la API se encuentra disponible en Swagger, en el siguiente enlace:

```https://<url_de_la_api>/api-docs```

### Autenticación

La API utiliza JSON Web Tokens (JWT) para la autenticación. Para obtener un token válido, se debe realizar una petición POST a la siguiente URL:

```https://<url_de_la_api>/auth/login```

La petición debe incluir en el cuerpo (body) un objeto JSON con las siguientes propiedades:

email: correo electrónico del usuario registrado en la plataforma
password: contraseña del usuario registrado en la plataforma
Si las credenciales son válidas, se recibirá un token de autenticación en la respuesta de la petición.

Para acceder a las rutas que requieren autenticación, se debe incluir el token en el encabezado (header) de la petición con la siguiente estructura:

```Authorization: Bearer <token>
Instalación y configuración
Clonar el repositorio de SILVER API.
```

Ejecutar npm install para instalar las dependencias.

Crear una base de datos en MySQL y configurar las credenciales de acceso en el archivo .env.

Ejecutar las migraciones y los seeders para crear la estructura de la base de datos y llenarla con datos de prueba. Para ello, ejecutar los siguientes comandos:

```npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all 
```
Iniciar el servidor con el comando npm start.


### Rutas disponibles

#### Categorías

- GET /categorias: devuelve la lista de categorías.
- GET /categorias/:codigo: devuelve los datos de una categoría específica.
- POST /categorias: crea una nueva categoría.
- PUT /categorias/:codigo: actualiza los datos de una categoría existente.
- DELETE /categorias/:codigo: elimina una categoría existente.

#### Productos

- GET /productos: devuelve la lista de productos.
- GET /productos/:codigo: devuelve los datos de un producto específico.
- POST /productos: crea un nuevo producto.
- PUT /productos/:codigo: actualiza los datos de un producto existente.
- DELETE /productos/:codigo: elimina un producto existente.

#### Facturas

GET /facturas: devuelve la lista de facturas.
GET /facturas/:numero: devuelve los datos de una factura específica.
POST /facturas: crea una nueva factura.
PUT /facturas/:numero: actualiza los datos de una factura existente.
DELETE /facturas/:numero: elimina una factura existente.

Movimientos

GET /movimientos: devuelve la lista de movimientos.
GET /movimientos/:id: devuelve los datos de un movimiento específico.
POST /movimientos: crea un nuevo movimiento.
PUT /movimientos/:id: actualiza los datos de un movimiento existente.
DELETE /movimientos/:id: elimina un movimiento existente.

Usuarios

GET /usuarios: devuelve la lista de usuarios.
GET /usuarios/:id: devuelve los datos de un usuario específico.
POST /usuarios: crea un nuevo usuario.

## Documentación

La documentación de la API se ha generado utilizando Swagger y se puede acceder a ella en el siguiente enlace: documentación de la API.

## Seguridad

Para asegurar la API se utiliza JWT (JSON Web Tokens) como mecanismo de autenticación y autorización. Algunas rutas requieren que el cliente incluya un token JWT válido en la cabecera de la petición para poder acceder a ellas. El token se obtiene al hacer una petición de inicio de sesión a la API.

## Inicio rápido

1. Clonar el repositorio.
2. Instalar las dependencias con npm install.
3. Crear un archivo .env en la raíz del proyecto con los datos de configuración necesarios para la base de datos y el puerto en el que se ejecutará la aplicación.
4. Crear la base de datos en MySQL.
5. Ejecutar las migraciones y seeders con npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all.
6. Iniciar la aplicación con npm start.

### Rutas

A continuación se listan las rutas disponibles en la API:

/api/auth/login: Permite iniciar sesión en la API. Se debe enviar un objeto JSON con las credenciales del usuario en el cuerpo de la petición ({ "username": "ejemplo", "password": "ejemplo" }). Devuelve un token JWT que se debe incluir en la cabecera de las peticiones a las rutas protegidas.
/api/productos: Permite obtener la lista de productos disponibles. Se puede filtrar por nombre y categoría, y se pueden ordenar por precio y cantidad.
/api/productos/:id: Permite obtener los detalles de un producto concreto.
/api/facturas: Permite obtener la lista de facturas de compra.
/api/facturas/:id: Permite obtener los detalles de una factura de compra concreta.
/api/movimientos: Permite obtener la lista de movimientos de venta y ajuste de inventario.
/api/movimientos/:id: Permite obtener los detalles de un movimiento concreto.
/api/categorias: Permite obtener la lista de categorías de productos disponibles.

### Contribuciones

Las contribuciones son bienvenidas. Para colaborar en el proyecto, sigue estos pasos:

- Haz un fork del repositorio.
- Clona tu fork en tu ordenador.
- Crea una rama con tu nueva funcionalidad (git checkout -b nueva-funcionalidad).
Realiza los cambios necesarios.
Hacer un commit de los cambios (git commit -am "Añadida nueva funcionalidad").
Sube los cambios a tu repositorio (git push origin nueva-funcionalidad).
Haz una pull request desde tu fork a este repositorio.
Espera a que alguien del equipo revise tu pull request y la apruebe o sugiera cambios.