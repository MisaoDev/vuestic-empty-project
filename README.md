# ambient-front
Frontend del proyecto Ambient

## Requisitos
- GIT. [Instalación para Windows](https://git-scm.com/download/win).

- Node. Versión LTS: [16.14.2](https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi).

- Yarn. Luego de instalar Node, actívalo en consola de admin:
```
corepack enable
```

## Instalación

Clona este repositorio, por ejemplo en una carpeta `/ambient/`:
```
git clone https://github.com/AmbientTeam2022/ambient-front
```
Se creará el subdirectorio `/ambient/ambient-front/`

Instala las dependencias de Node usando Yarn:
```
yarn install
```

Crea un archivo `.env` en la raíz del proyecto (`ambient-front`). Copia el siguiente contenido:

```
VUE_APP_API_URL="http://127.0.0.1:8000"
```

## Arranque

Compilar para desarrollo (con hot-reloads)
```
yarn serve
```

Compilar para producción
```
yarn build
```

## Herramientas

Se recomiendan las siguientes extensiones para VSCode:

- ESLint
- GitLens
- Prettier
- Sass
- Vue Language Features (Volar)

