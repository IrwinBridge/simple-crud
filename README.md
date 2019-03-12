# simple-crud
## Simple CRUD app using MEVN stack

### *Prerequisites:*
- node.js with npm (v10.15.2 or higher)
- MongoDB (v3.6.3 or higher)

### *Dependencies installation (For Ubuntu):*
- node.js & npm:
```
sudo curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt-get install -y nodejs
```
- MongoDB:
```
sudo apt update
sudo apt install -y mongodb
```

### *Install:*
1. ``` git clone https://github.com/IrwinBridge/simple-crud.git simple-crud ```
2.  ```cd simple-crud ```
3. ``` npm i ```

### *Run:*

``` npm run serve ```

*OR*

1.  ```npm run build ```
2.  ```node node/app.js ```

### *Test:*
- API Swagger documentation: http://localhost:3000/api-docs
- Web application: http://localhost:3000

### *Few notes:*
- All Front-end Vue code is in "front" folder
- All Back-end node-express-mongoose code is in "node" folder
