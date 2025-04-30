module.exports = {
    responseSuccess: function(body){
        var date = new Date();
        var ret = {
            "code": 200,
            "timestamp":date.toISOString(),
            "body" : body
        }
        return ret
    },

    responseError: function (code,message){
        var date = new Date();
        var ret = {
            "code": 200,
            "timestamp":date.toISOString(),
            "message" : message
        }
        return ret
    }
}