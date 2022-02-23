
const Service = require('./service');

async function getTasks (req, res, next) {
    try {
        let svc = new Service();
        let result = await svc.getTasks();
        res.send(result);
    } catch (error) {
        return res.send(error);
    }
    finally {
        return next();
    }
}   

async function getTask (req, res, next) {    
    try {
        let svc = new Service();
        let result = await svc.getTask(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
    finally {
        return next();
    }
}

async function addTask(req, res, next) {
    try {
        let svc = new Service();
        let result = await svc.addTask(req.body);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
    finally {
        return next();
    }
}

async function updateTask(req, res, next) {
    try {
        let svc = new Service();
        let result = await svc.updateTask(req.body)
        return res.json(result);        
    } catch (error) {
        return res.json(error);
    }
    finally {
        return next();
    }
}

async function deleteTask(req, res, next) {
    try {
        let svc = new Service();
        let result = await svc.deleteTask(req.body)
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
    finally {
        return next();
    }
}

module.exports =  { getTasks, getTask, addTask, updateTask, deleteTask }