# venting-spa
A simple Vue based app implementing CRUD functionality with node-js(express) and mongodb and vue.js

### defination of folders heirachy
| folders       | function          |
| ------------- |:-------------:|
| MODELS      | stores the representation of each "object"/"component" as to be stored in the database(mongoDB, hosted on MLABs) |
| PUBLIC     | stores the static files which are currently not human readable because they have been built using babel webpack |
| ROUTES | in this folder, the files contained within contains the code controlling that route(e.g user.js contains all the code relating to every action starting with `url`)| 
|index.js| this is the main entry point for the application|

### running and setting up the application
(1) firstly run `npm install` in the root folder of the project<hr/>
(2) then run `node app.js` : it then brings out the port o which the server as been started <hr/>
(3) open your browser and go to the adress http://localhost:'port' <hr/>
note: 'port' should be replaced by the port which the server is set to run on
