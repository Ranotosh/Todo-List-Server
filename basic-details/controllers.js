const actions = require('./actions');
const response = require('../responses')

module.exports={
    getCount: async function(req){
        var count = await actions.getCount();
        console.log(typeof count)
        if(count.includes('Error:Http Status')){
            return response.responseError(401,'Invalid Data')
        }
        return response.responseSuccess(count)
    }
}