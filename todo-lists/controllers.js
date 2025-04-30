const actions = require('./actions');
const response = require('../responses')

module.exports={
    getAllTasks: async function(req,res){
        var data = await actions.getAllTasks(res);
        return response.responseSuccess(data)
    },

    updateTask:async function(req,res){
        var data = await actions.updateTask(req,res);
        return response.responseSuccess(data)
    },

    addTask:async function(req,res){
        var data = await actions.addTask(req,res);
        return response.responseSuccess(data)
    },

    deleteTask:async function(req,res){
        var data = await actions.deleteTask(req,res);
        return response.responseSuccess(data)
    },

    deleteAllTask:async function(req,res){
        var data = await actions.deleteAllTask(req,res);
        return response.responseSuccess(data)
    },
}