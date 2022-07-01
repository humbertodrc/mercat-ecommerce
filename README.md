
# Proyecto Mercat-Ecommerce

Simulación de un Ecommerce con React, Redux, React-Router, LocalStorage y Styled-Components, la idea principal es poder simular todas las operaciones que se realizan en un carrito de compras, manejando el estado con Redux y usando el LocalStorage para conservar la persistencia de la data
## API Reference

#### Get all items

```http
  GET /api/amiibo/
```


#### Get item

```http
  GET /api/amiibo/?id=value
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




Reconstruir los modulos levantar el proyecto en Local
```
npm install
npm run dev
```


## Features

- Agregar al carrito
- Sumar cantidad al item que ya esta en el carrito
- Eliminar cantidad al item que ya esta en el carrito
- Elimanr un item completo del carrito
- Total a pagar
- Pagina de Checkout



## Screenshots

![desktop](https://user-images.githubusercontent.com/63797901/176800742-a60bf19f-7081-4d35-9915-035c08191a12.png)

![desktop-2](https://user-images.githubusercontent.com/63797901/176800794-11b2ebbf-c360-4441-bc25-b157221bc562.png)


## Demo

Insert gif or link to demo

https://mercat-ecommerce-humberto.netlify.app/