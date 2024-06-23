<h3 align="center">Auth Service</h3> 
  
<p align="center">Authentication service, follows the best practices in terms of security; providing credential encryption with bcrypt and route guards that verify access based on the JWT token created for a limited time upon logging in.</p>
<hr/>

**<p align="center">Main technologies used</p>**

<p align="center">        
  <img src="https://img.shields.io/badge/-Linux-108A1A"> 
  <img src="https://img.shields.io/badge/-Git-A30A0A">   
  <img src="https://img.shields.io/badge/-VSCode-blue"></br>
  <img src="https://img.shields.io/badge/-TypeScript-1366A9"> 
  <img src="https://img.shields.io/badge/-NestJS-A40A0A"> 
  <img src="https://img.shields.io/badge/-Sequelize-1366A9"> 
  <img src="https://img.shields.io/badge/-PostgreSQL-blue">   
  <img src="https://img.shields.io/badge/-Jest-7A1B6C"> 
</p>

**<p align="left">Deploy</p>**

<p align="left">https://auth-service-backend-app.vercel.app<p>
<hr/>

**<p align="left">How to use</p>**

1. Click on the link to the deployed app above

2. Create an account using the POST method on users

3. Log in with your account using the POST method on auth (after that, you will be able to use the rest of the methods on users).

<hr/>

**<p align="left">Installation</p>**

<p>1. Clone the repository:</p>

   ```sh
   git clone https://github.com/leonardobaranelli/rest-api-backend-app.git
   ```

<p>2. Create a .env file at the root of the repository with the following variable names, and fill it with your database credentials:</p>
   
```sh
DB_NAME = 
DB_USER = 
DB_PASS = 
DB_HOST =
```

<p>3. Install dependencies at the root of the repository and start the app:</p>

```sh
npm install
npm start
```

<hr/>

**<p align="left">Testing</p>**

To run tests, simply use the command::

   ```sh
   npm run test:e2e
   ```