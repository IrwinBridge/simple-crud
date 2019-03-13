# CRUD
Simple CRUD app using Node.js, Express.js, MongoDB and Vue.js.

## Dependencies installation

### *Prerequisites:*
- node.js with npm (v10.15.2 or higher)
- MongoDB (v3.6.3 or higher)

### *For Ubuntu:*
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

### *For MacOS using brew:*
- node.js & npm:
```
brew install node
```
- MongoDB:
```
brew tap mongodb/brew
brew install mongodb-community@4.0
brew services start mongodb-community@4.0
```

### *For Windows using chocolatey:*
- node.js & npm:
```
choco install nodejs-lts -y
```
- MongoDB:
```
choco install mongodb -y
C:\Program Files\MongoDB\Server\4.0\bin\mongod --install
```

### *Build:*
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
