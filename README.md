# Parte Frontend

Este proyecto es una aplicación frontend basada en React y TypeScript, construida utilizando Vite para un desarrollo y empaquetado rápido. El proyecto incorpora diversas librerías y herramientas para la autenticación, componentes de UI, manejo de formularios, gestión de estado, entre otros.

## Tabla de Contenidos

- [Instalación del Proyecto](#instalación-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Dependencias Principales](#dependencias-principales)
- [Dependencias de Desarrollo](#dependencias-de-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación del Proyecto

Para configurar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-repositorio.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd nombre-repositorio
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

En este proyecto, puedes utilizar los siguientes comandos:

- `npm run dev`: Inicia el servidor de desarrollo utilizando Vite.
- `npm run build`: Compila el proyecto usando TypeScript y construye los archivos optimizados para producción con Vite.
- `npm run lint`: Ejecuta ESLint para analizar el código y asegurarse de que sigue las convenciones establecidas.
- `npm run preview`: Previsualiza la aplicación después de la compilación de producción.

## Dependencias Principales

Este proyecto utiliza varias librerías para mejorar la funcionalidad y la experiencia del usuario:

- React: Biblioteca para construir interfaces de usuario.
- Auth0 React: Implementación de autenticación con Auth0.
- React Hook Form: Manejo de formularios en React.
- React Query: Gestión de estado y sincronización de datos.
- React Router: Enrutador para aplicaciones React.
- Radix UI: Componentes de UI accesibles y personalizables.
- Tailwind CSS: Framework de CSS para el diseño rápido y responsivo.

## Dependencias de Desarrollo

Herramientas utilizadas durante el desarrollo del proyecto:

- Vite: Herramienta rápida de desarrollo y empaquetado.
- TypeScript: Lenguaje que añade tipos estáticos a JavaScript.
- ESLint: Herramienta de linting para identificar y arreglar problemas en el código.
- Tailwind CSS: Utilizado para el diseño estilístico del frontend.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```plaintext
├── src/               # Código fuente del proyecto
│   ├── components/    # Componentes de React
│   ├── hooks/         # Custom hooks
│   ├── pages/         # Páginas de la aplicación
│   ├── styles/        # Archivos de estilo (CSS, Tailwind)
│   └── ...            # Otros directorios y archivos
├── public/            # Archivos estáticos
├── package.json       # Archivo de configuración de dependencias
└── README.md          # Este archivo
```
