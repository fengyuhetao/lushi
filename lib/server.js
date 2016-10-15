var utils = require("utils.js");

module.exports = {
    baseUrl : "http://test.api.lushibo.com/v1",
    init : function(options){

    },
    request : function(options){
        var self = this;
        var header = {

        }
        header = utils.extend(options.header, header);

        var data = {}
        data = utils.extend(options.data, data);

        wx.request({
            url: self.baseUrl + options.route,
            header: header,
            data: data,
            method: options.method ? options.method : 'GET',
            success: function(res) {
                options.success(res.data);
            }
        });

    },

}