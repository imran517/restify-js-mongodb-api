const controller = require('./controller')

const routes = function (server){
    server.get('/gettasks', controller.getTasks);
    server.get('/gettask/:id', controller.getTask);

    server.post('/addtask', controller.addTask);
    server.post('/updatetask', controller.updateTask);
    server.post('/deletetask', controller.deleteTask);
}

module.exports = routes;