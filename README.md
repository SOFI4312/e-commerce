Proyecto de comercio electrónico

Creación de la Carpeta Principal: Creamos la carpeta base del proyecto llamada ecomerrs para organizar los componentes del backend y frontend:

-Se creó una carpeta llamada backend -Se inicializó el proyecto de Node.js y se instalaron las dependencias necesarias: -npm init -y -npm install express nodemon mongoose

-Abrimos la carpeta en Visual Studio Code para escribir el código del servidor -code .

-Se creó una carpeta llamada frontend dentro de ecomerrs -Inicializamos una aplicación React y agregamos las dependencias necesaria -npx create-react-app frontend -npm install axios react-router-dom @material-tailwind/react

-Comandos Utilizados y su Función -Backend -npm init -y: -Inicializa un proyecto de Node.js con un archivo package.json que contiene la configuración básica. -npm install express nodemon mongoose: -express: Framework para crear el servidor y manejar rutas. -nodemon: Herramienta que reinicia automáticamente el servidor al detectar cambios en el código. -mongoose: Librería para interactuar con MongoDB de manera más sencilla.

-Frontend -npx create-react-app frontend: -Crea una aplicación React lista para usar, con la estructura básica del proyecto. -npm install axios react-router-dom @material-tailwind/react: -axios: Cliente HTTP para realizar solicitudes al backend. -react-router-dom: Librería para manejar rutas en React. -@material-tailwind/react: Biblioteca de componentes basada en Tailwind CSS para estilizar la interfaz.

-Cómo Ejecutar el Proyecto -Navega a la carpeta del backend: -cd backend -Instala las dependencias -npm install -Ejecuta el servidor: -Npx nodemon servidor.js

-Frontend -Navega a la carpeta del frontend -cd frontend -Instala las dependencias -npm install -Ejecuta la aplicación: -Start npm start La aplicación debería estar disponible en http://localhost:3000.

Funcionalidades Autenticación de usuarios: Los usuarios pueden registrarse, iniciar sesión y acceder a su perfil. Gestión de productos: Los administradores pueden agregar, editar o eliminar productos. Carrito de compras: Los usuarios pueden agregar productos al carrito y proceder al pago. Órdenes: Los usuarios pueden realizar pedidos y revisar su historial de compras.

el proyecto no contiene imagenes ya que por temas de tiempo no nos fue posible adjuntarlas ,solo se podra visualizar la lista de productos-
