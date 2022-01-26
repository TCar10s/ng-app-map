# MapsApp

<div align="center">
  <h3>
    <a href="https://ng-map-app.netlify.app/" target="_blank">
      Demo
    </a>
  </h3>
</div>

## Overview

![screenshot](https://raw.githubusercontent.com/TCar10s/ng-app-map/main/src/assets/img/screenshot-desktop.jpeg)

## Notas

Para poder visualizar el mapa no olvides proporcionar tu API Key de Google Maps.
<a href="https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key" target="_blank">
     Aquí puedes obtener tu api key.
</a>

El api key debes proporcionarlo al AgmCoreModule en el archivo app.module.ts
```
 AgmCoreModule.forRoot({
    apiKey: 'your-api-key',
 }),
```

Recuerden reconstruir los módulos de Node.

```
npm install
```

Ejecute `ng serve` para un servidor de desarrollo. Vaya a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

```
ng serve
```

## Contact

- Website [www.tutoscarlos.xyz](https://www.tutoscarlos.xyz)
- GitHub [@TCar10s](https://https://github.com/TCar10s)
- Twitter [@Tutos_Carlos11](https://twitter.com/Tutos_Carlos11)
