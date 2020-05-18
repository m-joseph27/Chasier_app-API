# Food Cashier API

[![Express JS](https://img.shields.io/badge/Dependencies-Express%20JS-green)](https://expressjs.com/)
![GitHub repo size](https://img.shields.io/github/repo-size/HiRahmat-Dev/food-cashier-api)
![GitHub contributors](https://img.shields.io/github/contributors/HiRahmat-Dev/food-cashier-api)
![GitHub stars](https://img.shields.io/github/stars/HiRahmat-Dev/food-cashier-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/HiRahmat-Dev/food-cashier-api?style=social)
![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FHiRahmat-Dev%2Ffood-cashier-api
)

<p align="center">
  <a href="https://nodejs.org/" target="blank">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents
- [Prerequiste](#prerequiste)
- [Installation](#installation)
- [Link Collection Postman](#link-collection-postman)
- [Structure Folder](#structure-folder)
- [Contributing](#contributing)
- [Related Project](#related-project)
- [Contributors](#contributors)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.

## Installation
### Clone
```
$ git clone https://github.com/m-joseph27/Chasier_app-API.git
$ cd food-cashier-api
$ npm install
```

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST=YOUR_HOST
DB_USER=YOUR_USER
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_TABLE-NAME

SERVER_PORT=YOUR_PORT

```

### Start Development Server
```
$ npm run serve
```
## Link Collection Postman
[Postman](https://www.getpostman.com/collections/bb923819853137d50b60)

## Structure Folder
```
\---src
|    \---config
|    |   +---db.js
|    \---controller
|    |   +---auth.js
|		 |	 +---cart.js
|		 |	 +---category.js
|    |   +---checkout.js
|    |   +---product.js
|    |   +---payment.js
|    \---helper
|		 |	 +---user.js
|		 |	 +---helpers.js
|    \---models
|    |   +---auth.js
|		 |	 +---cart.js
|		 |	 +---category.js
|    |   +---checkout.js
|    |   +---payment.js
|    |   +---product.js
|    \---router
|    |   +---auth.js
|		 |	 +---cart.js
|		 |	 +---category.js
|    |   +---index.js
|    |   +---payment.js
|    |   +---product.js
+---server.js
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request

## Related Project
* [`Frontend-Food-Cashier`](https://github.com/m-joseph27/POS-Chasier_app-with-Vuejs)
* [`Backend-Food-Cashier`](https://github.com/m-joseph27/Chasier_app-API)

## Contributors
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/m-joseph27">
          <img width="150" src="https://avatars2.githubusercontent.com/u/60948526?s=400&u=c258f85ec35ccfda6ce3911dae79d45e335088b3&v=4" alt="Muhammad Yusuf"><br/>
          <b>Muhammad Yusuf</b>
        </a>
      </td>
    </tr>
  </table>
</center>
